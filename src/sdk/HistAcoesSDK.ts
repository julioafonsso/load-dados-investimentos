import axios from "axios";
import qs from "qs";
import {CATEGORY} from './AcoesSDK'

const URL = new Map()
URL.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/indicatorhistoricallist");
URL.set(CATEGORY.USA, "https://statusinvest.com.br/stock/indicatorhistoricallist");

export type AttIndicador = {
    key: string,
    ranks: AttIndicadorRank[]

}

export type AttIndicadorRank = {
    timeType: number;
    rank: number;
    rank_F: string;
    value: number;
    value_F: string;
    rankN: number;
}


export const getIndicadores = async (acao: string, categoryId: number): Promise<AttIndicador[]> => {
    console.log(`GET acao ${acao}`)
    let url = URL.get(categoryId);
    var bodyFormData = {
        "codes": [acao.toLocaleLowerCase()],
        "time": "5",
        "byQuarter": false,
        "futureData": false
    }
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

        return res.data["data"][acao.toLocaleLowerCase()];
    } catch (e) {
        if(e.response !== undefined){
            console.log(`error -> ticker : ${acao} , HttpStatus : ${e.response.status}, Message : ${e.response.statusText} , url : ${url}`)
        }else{
            console.log(`error -> ticker : ${acao} , error : ${e} , url : ${url}`)
        }

        console.log("vou continuar executando")

        return []
    }

}