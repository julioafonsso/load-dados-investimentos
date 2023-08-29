import axios from "axios";
import qs from "qs";



export type AcaoHistType = {
    key: string,
    ranks: AcaoHistRankType[]

}

export type AcaoHistRankType = {
    timeType: number;
    rank: number;
    rank_F: string;
    value: number;
    value_F: string;
    rankN: number;
}

export const getAcaoHist = async (acao: string): Promise<AcaoHistType[]> => {
    var bodyFormData = {
        "codes": [acao.toLocaleLowerCase()],
        "time": "7",
        "byQuarter": false,
        "futureData": false
    }
    try {
        const res = await axios.post(
            'https://statusinvest.com.br/acao/indicatorhistoricallist',
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
        console.log("error -> ", e)
    }

}