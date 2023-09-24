import {CATEGORY} from "../enums/Consts";
import axios from "axios";
import {AppDataSource} from "../config/AppDataSource";
import {Acao} from "../entities/Acao";
import {Dividendo} from "../entities/Dividendo";
import {Repository} from "typeorm";
import {setTimeout} from "timers/promises";

const URL = new Map()
URL.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/companytickerprovents");
URL.set(CATEGORY.USA, "https://statusinvest.com.br/stock/companytickerprovents");

export type DividendoType = {
    rank: number,
    value: number
}

const main = async () => {
    await AppDataSource.initialize();
    const repository = AppDataSource.getRepository(Dividendo)
    const repositoryAcao = AppDataSource.getRepository(Acao)

    await repository.clear();

    await loadDividendos(repository, repositoryAcao, CATEGORY.BRASIL);
    await loadDividendos(repository, repositoryAcao, CATEGORY.USA);


}

const loadDividendos = async (repository: Repository<Dividendo>, acaoRepository: Repository<Acao>, categoryId: number) => {

    const listAcoes = await acaoRepository.findBy({categoryId: categoryId});

    for (const acao of listAcoes) {
        (await getDividendo(categoryId, acao.ticker))
            .forEach(dividendo => {
                let entity = new Dividendo()
                entity.ano = dividendo.rank;
                entity.value = dividendo.value
                entity.ticker = acao.ticker;

                repository.save(entity)
            })
    }

}
const getDividendo = async (categoryId: number, ticker: string): Promise<DividendoType[]> => {
    console.log(ticker)
    const url = URL.get(categoryId);
    try {
        const res = await axios.get(
            `${url}?ticker=${ticker}`
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


main().then();