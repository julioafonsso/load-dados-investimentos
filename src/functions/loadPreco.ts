import {AppDataSource} from "../config/AppDataSource";
import {LucroDividendo} from "../entities/LucroDividendo";
import {Acao} from "../entities/Acao";
import {CATEGORY} from "../enums/Consts";
import {Repository} from "typeorm";
import axios from "axios";
import {setTimeout} from "timers/promises";
import {DividendoType} from "./loadLucroDividendos";
import qs from "qs";

const URL_PRICE = new Map()
URL_PRICE.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/tickerprice");
URL_PRICE.set(CATEGORY.USA, "https://statusinvest.com.br/stock/tickerprice");


const CURRENCY_TYPE = new Map();
CURRENCY_TYPE.set(CATEGORY.BRASIL, 1);
CURRENCY_TYPE.set(CATEGORY.USA, 2);

const TYPE = new Map();
TYPE.set(CATEGORY.BRASIL, 0);
TYPE.set(CATEGORY.USA, 1);

const main = async () => {
    console.log("Init Load Price")
    await AppDataSource.initialize();
    const repositoryAcao = AppDataSource.getRepository(Acao)

    await loadPrice( repositoryAcao, CATEGORY.BRASIL);
    console.log("Finish Load Price Brasil")
    await loadPrice( repositoryAcao, CATEGORY.USA);
    console.log("Finish Load price USA")

}

const loadPrice  = async (acaoRepository: Repository<Acao>, categoryId: number) => {
    const listAcoes = await acaoRepository.findBy({categoryId: categoryId});

    for (const acao of listAcoes) {
        const price = await getPrice(categoryId, acao.ticker);
        if(price !== undefined){
            acao.price = price;
            acaoRepository.save(acao);
        }
    }
}

const getPrice =async (categoryId: number, ticker: string): Promise<number> => {
    const url = URL_PRICE.get(categoryId);

    const bodyFormData = {
        "ticker": ticker,
        "type": TYPE.get(categoryId),
        "currences": CURRENCY_TYPE.get(categoryId)
    };

    try {
        const res = await axios.post(
            url,
            qs.stringify(bodyFormData),
            {
                headers: {
                    'User-Agent': 'PostmanRuntime/7.29.2',
                    'Host': 'statusinvest.com.br'
                }
            }
        );
        const prices =  res.data[0]['prices']
        return prices[prices.length -1 ]["price"]
    } catch (e) {
        if (e?.response?.status === 429) {
            console.log("too many request, I will sleep")
            await setTimeout(200);
            return getPrice(categoryId, ticker)
        } else {
            console.log(`Occur some error to ticket ${ticker} : status ${e?.response?.status}`);
            return undefined;
        }
    }

}

main().then();