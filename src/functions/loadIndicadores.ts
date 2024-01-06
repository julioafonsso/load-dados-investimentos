import {AppDataSource} from "../config/AppDataSource";
import {Acao} from "../entities/Acao";
import {Indicadores} from "../entities/Indicadores";
import {setTimeout} from "timers/promises";
import {Repository} from "typeorm";
import {CATEGORY} from "../enums/Consts";
import axios from "axios";
import qs from "qs";


const URL = new Map()
URL.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/indicatorhistoricallist");
URL.set(CATEGORY.USA, "https://statusinvest.com.br/stock/indicatorhistoricallist");


export type AttIndicador = {
    key: string,
    avg: number,
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


const main = async () => {
    console.log("Init Load Indicadores")
    try {
        await AppDataSource.initialize();
    }catch (e){
        console.log(e);
        return;
    }

    const acaoRepository = AppDataSource.getRepository(Acao)
    const indicadoresRepository = AppDataSource.getRepository(Indicadores)

    await indicadoresRepository.clear();

    await loadIndicadores(indicadoresRepository, acaoRepository, CATEGORY.BRASIL);
    console.log("Finish Load Indicadores Brasil")
    await loadIndicadores(indicadoresRepository, acaoRepository, CATEGORY.USA);
    console.log("Finish Load Indicadores USA")


}

const loadIndicadores = async (indicadoresRepository: Repository<Indicadores>, acaoRepository: Repository<Acao>, categoryId: number) => {
    const listAcoes = (await acaoRepository.findBy({categoryId: categoryId}));

    for (const acao of listAcoes) {
        const hist = await getIndicadores(acao.ticker, categoryId)
        if (hist.length > 0)
            save(acao.ticker, hist, indicadoresRepository)
    }
}
const save = (ticker: string, att: AttIndicador[], indicadoresRepository: Repository<Indicadores>) => {
    const histMap = {}

    setValues(histMap, att, ticker, "dy", "dy")
    setValues(histMap, att, ticker, "pl", "p_l")
    setValues(histMap, att, ticker, "pvp", "p_vp")
    setValues(histMap, att, ticker, "pAtivo", "p_ativo")
    setValues(histMap, att, ticker, "pEbit", "p_ebit")
    setValues(histMap, att, ticker, "pSR", "p_sr")
    setValues(histMap, att, ticker, "precoPorCapitalGiro", "p_capitlgiro")
    setValues(histMap, att, ticker, "precoProAtivoCirculante", "p_ativocirculante")
    setValues(histMap, att, ticker, "evEbit", "ev_ebit")
    setValues(histMap, att, ticker, "lpa", "lpa")
    setValues(histMap, att, ticker, "vpa", "vpa")
    setValues(histMap, att, ticker, "pegRatio", "peg_Ratio")
    setValues(histMap, att, ticker, "dividaliquidaPatrimonioLiquido", "dividaliquida_patrimonioliquido")
    setValues(histMap, att, ticker, "dividaLiquidaEbit", "dividaliquida_ebit")
    setValues(histMap, att, ticker, "liquidezCorrente", "liquidezcorrente")
    setValues(histMap, att, ticker, "margemBruta", "margembruta")
    setValues(histMap, att, ticker, "margemEbit", "margemebit")
    setValues(histMap, att, ticker, "margemLiquida", "margemliquida")
    setValues(histMap, att, ticker, "roe", "roe")
    setValues(histMap, att, ticker, "roa", "roa")
    setValues(histMap, att, ticker, "roic", "roic")
    setValues(histMap, att, ticker, "giroAtivos", "giro_ativos")
    setValues(histMap, att, ticker, "passivoAtivo", "passivo_ativo")
    Object.entries(histMap).forEach(
         ([_, value]) => indicadoresRepository.save(value)
    );
}

const setValues = (map: {}, hist: AttIndicador[], ticker: string, attrName: string, keyName: string) => {
    const pl = hist.filter(h => h.key === keyName)[0]


    if (map[0] == null) {
        const tmp = new Indicadores();
        tmp.ano = 0;
        tmp.ticker = ticker;
        map[0] = tmp
    }

    const histBD = map[0];
    histBD[attrName] = pl.avg

    pl.ranks.forEach(rank => {

        if (map[rank.rank] == null) {
            const tmp = new Indicadores();
            tmp.ano = rank.rank;
            tmp.ticker = ticker;
            map[rank.rank] = tmp
        }

        const histBD = map[rank.rank];
        if (rank.value !== undefined)
            histBD[attrName] = rank.value
    })
}

const getIndicadores = async (acao: string, categoryId: number): Promise<AttIndicador[]> => {
    let url = URL.get(categoryId);
    const bodyFormData = {
        "codes": [acao.toLocaleLowerCase()],
        "time": "5",
        "byQuarter": false,
        "futureData": false
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

        return res.data["data"][acao.toLocaleLowerCase()];
    } catch (e) {
        if (e?.response?.status === 429) {
            console.log("too many request, I will sleep")
            await setTimeout(200);
            return getIndicadores(acao, categoryId);
        } else {
            console.log(`Occur some error to ticket ${acao} : status ${e?.response?.status}`);
            return [];
        }
    }

}

main().then();