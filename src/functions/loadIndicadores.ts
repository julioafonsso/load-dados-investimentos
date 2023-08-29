import { AppDataSource } from "../config/AppDataSource";
import { Acao } from "../entities/Acao";
import {Indicadores} from "../entities/Indicadores";
import {setTimeout} from "timers/promises";
import {AttIndicador, getIndicadoresBrasil, getIndicadoresUSA} from "../sdk/HistAcoesSDK";
import {Repository} from "typeorm";

const main = async () =>{
    await AppDataSource.initialize();
    const acaoRepository = AppDataSource.getRepository(Acao)
    const indicadoresRepository = AppDataSource.getRepository(Indicadores)

    await indicadoresRepository.clear();

    indicadorUSA(indicadoresRepository, acaoRepository);
    indicadorBrasil(indicadoresRepository, acaoRepository);

}

const indicadorUSA = async (indicadoresRepository: Repository<Indicadores>, acaoRepository: Repository<Acao>) =>{
    const listAcoes = await acaoRepository.findBy({categoryId:12});
    for (const acao of listAcoes) {
        const hist = await getIndicadoresUSA(acao.ticker)
        if(hist.length > 0 )
            save(acao.ticker, hist, indicadoresRepository)
        await setTimeout(500); // Se nao tive esse break, a API recusa por excesso de requests
    }
}

const indicadorBrasil = async (indicadoresRepository: Repository<Indicadores>, acaoRepository: Repository<Acao>) =>{
    const listAcoes = await acaoRepository.findBy({categoryId:1});
    for (const acao of listAcoes) {
        const hist = await getIndicadoresBrasil(acao.ticker)
        if(hist.length > 0 )
            save(acao.ticker, hist, indicadoresRepository)
        await setTimeout(500); // Se nao tive esse break, a API recusa por excesso de requests
    }
}

const save = (ticker: string, att:AttIndicador[],  indicadoresRepository: Repository<Indicadores>) => {
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
main().then();