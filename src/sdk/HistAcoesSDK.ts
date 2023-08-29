import axios from "axios";
import qs from "qs";
import exp from "constants";



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

export const getIndicadoresBrasil = async (acao: string): Promise<AttIndicador[]> => {
    return getIndicadores(acao, "https://statusinvest.com.br/acao/indicatorhistoricallist");
}

export const getIndicadoresUSA = async (acao: string): Promise<AttIndicador[]> => {
    return getIndicadores(acao, "https://statusinvest.com.br/stock/indicatorhistoricallist");
}
const getIndicadores = async (acao: string, url: string): Promise<AttIndicador[]> => {
    console.log(acao);
    var bodyFormData = {
        "codes": [acao.toLocaleLowerCase()],
        "time": "7",
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
        console.log(`error -> ticker : ${acao} , HttpStatus : ${e.response.status}, Message : ${e.response.statusText} , url : ${url}`)
        return []
    }

}