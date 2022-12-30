import { setTimeout } from "timers/promises";
import { AppDataSource } from "../config/AppDataSource";
import { HistAcao } from "../entities/HistAcao";
import { AcaoHistType, getAcaoHist } from "../sdk/HistAcoesSDK";

const loadHist = async (acoes : string[]) => {

    
    
    const histRepository = AppDataSource.getRepository(HistAcao);

   
    for (const acao of acoes) {
        (await histRepository.findBy({ ticker: acao }))
            .forEach(acaoBd => histRepository.remove(acaoBd));

        const histMap = {}
        console.log("call ", acao)
        const hist = await getAcaoHist(acao);
        setValues(histMap, hist, acao, "dy", "dy")
        setValues(histMap, hist, acao, "pl", "p_l")
        setValues(histMap, hist, acao, "pvp", "p_vp")
        setValues(histMap, hist, acao, "pAtivo", "p_ativo")
        setValues(histMap, hist, acao, "pEbit", "p_ebit")
        setValues(histMap, hist, acao, "pSR", "p_sr")
        setValues(histMap, hist, acao, "precoPorCapitalGiro", "p_capitlgiro")
        setValues(histMap, hist, acao, "precoProAtivoCirculante", "p_ativocirculante")
        setValues(histMap, hist, acao, "evEbit", "ev_ebit")
        setValues(histMap, hist, acao, "lpa", "lpa")
        setValues(histMap, hist, acao, "vpa", "vpa")
        setValues(histMap, hist, acao, "pegRatio", "peg_Ratio")
        setValues(histMap, hist, acao, "dividaliquidaPatrimonioLiquido", "dividaliquida_patrimonioliquido")
        setValues(histMap, hist, acao, "dividaLiquidaEbit", "dividaliquida_ebit")
        setValues(histMap, hist, acao, "liquidezCorrente", "liquidezcorrente")
        setValues(histMap, hist, acao, "margemBruta", "margembruta")
        setValues(histMap, hist, acao, "margemEbit", "margemebit")
        setValues(histMap, hist, acao, "margemLiquida", "margemliquida")
        setValues(histMap, hist, acao, "roe", "roe")
        setValues(histMap, hist, acao, "roa", "roa")
        setValues(histMap, hist, acao, "roic", "roic")
        setValues(histMap, hist, acao, "giroAtivos", "giro_ativos")
        setValues(histMap, hist, acao, "passivoAtivo", "passivo_ativo")

        Object.entries(histMap).forEach(
            ([_, value]) => histRepository.save(value)
        );
        await setTimeout(100);

    }


}


const setValues = (map: {}, hist: AcaoHistType[], ticker: string, attrName: string, keyName: string) => {
    const pl = hist.filter(h => h.key === keyName)[0]
    pl.ranks.forEach(rank => {

        if (map[rank.rank] == null) {
            const tmp = new HistAcao();
            tmp.ano = rank.rank;
            tmp.ticker = ticker;
            map[rank.rank] = tmp
        }

        const histBD = map[rank.rank];
        if (rank.value !== undefined)
            histBD[attrName] = rank.value
    })
}

export default loadHist