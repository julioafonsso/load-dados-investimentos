import {CATEGORY} from "../enums/Consts";
import axios from "axios";
import {AppDataSource} from "../config/AppDataSource";
import {Acao} from "../entities/Acao";
import {LucroDividendo} from "../entities/LucroDividendo";
import {Repository} from "typeorm";
import {setTimeout} from "timers/promises";

const URL_DIVIDENDO = new Map()
URL_DIVIDENDO.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/companytickerprovents");
URL_DIVIDENDO.set(CATEGORY.USA, "https://statusinvest.com.br/stock/companytickerprovents");


const URL_PAYOUT = new Map()
URL_PAYOUT.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/payoutresult");
URL_PAYOUT.set(CATEGORY.USA, "https://statusinvest.com.br/stock/payoutresult");


type PayoutType = {
    ano: number,
    percentual: number,
    lucro: number

}

export type DividendoType = {
    rank: number,
    value: number
}

const main = async () => {
    console.log("Init Load LucroDividendo")
    await AppDataSource.initialize();
    const repository = AppDataSource.getRepository(LucroDividendo)
    const repositoryAcao = AppDataSource.getRepository(Acao)

    await repository.clear();

    await loadLucroDividendos(repository, repositoryAcao, CATEGORY.BRASIL);
    console.log("Finish Load LucroDividendo Brasil")
    await loadLucroDividendos(repository, repositoryAcao, CATEGORY.USA);
    console.log("Finish Load LucroDividendo USA")


}

const loadLucroDividendos = async (repository: Repository<LucroDividendo>, acaoRepository: Repository<Acao>, categoryId: number) => {
    const listAcoes = await acaoRepository.findBy({categoryId: categoryId});

    for (const acao of listAcoes) {

        const dividendos = await getDividendo(categoryId, acao.ticker);
        const payouts = await getPayout(categoryId, acao.ticker, acao.companyId);

        dividendos.forEach(dividendo => {
            let entity = new LucroDividendo();
            entity.ticker = acao.ticker;
            entity.ano = dividendo.rank
            entity.value = dividendo.value;

            let payout = payouts.filter(payout => payout.ano == dividendo.rank)
                .pop();
            if(payout !== undefined){
                entity.payout = payout.percentual;
                entity.lucroLiquido = payout.lucro;
            }


            repository.save(entity)

        })

    }

}
const getDividendo = async (categoryId: number, ticker: string): Promise<DividendoType[]> => {
    console.log(ticker)
    const url = URL_DIVIDENDO.get(categoryId);
    try {
        const res = await axios.get(
            `${url}?ticker=${ticker}&chartProventsType=2`
            ,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
                }
            }
        );

        return res.data['assetEarningsYearlyModels']
    } catch (e) {
        if (e?.response?.status === 429) {
            console.log("too many request, I will sleep")
            await setTimeout(200);
            return getDividendo(categoryId, ticker)
        } else {
            console.log(`Occur some error to ticket ${ticker} : status ${e?.response?.status}`);
            return [];
        }
    }

}

const getPayout = async (categoryId: number, ticker: string, companyId: number): Promise<PayoutType[]> => {
    const url = URL_PAYOUT.get(categoryId);
    try {
        const res = await axios.get(
            `${url}?code=${ticker}&companyid=${companyId}&type=2`
            ,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
                }
            }
        );

        let anos:number[] = res.data['chart']['category']
        let percentuais : number[] = res.data['chart']['series']['percentual']
        let lucros : number[] = res.data['chart']['series']['lucroLiquido']
        let response =  anos.map((ano, index) => {
            return {
                ano: ano,
                percentual : percentuais[index]['value'],
                lucro : lucros[index]['value']
            }
        })
        return response;
    } catch (e) {
        if (e?.response?.status === 429) {
            console.log("too many request, I will sleep")
            await setTimeout(200);
            return getPayout(categoryId, ticker, companyId)
        } else {
            console.log(`Occur some error to ticket ${ticker} : status ${e?.response?.status}`);
            return [];
        }
    }

}


main().then();