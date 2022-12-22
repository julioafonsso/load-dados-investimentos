import { Acao } from "../entities/Acao";
import { AcaoType } from "../sdk/AcoesSDK";

const buildAcoes = (value: AcaoType, pais: string) => {
    const acao = new Acao();
    acao.companyId = value.companyId;
    acao.companyName = value.companyName;
    acao.ticker = value.ticker;
    acao.price = value.price;
    acao.pl = value.p_L;
    acao.dy = value.dy;
    acao.pvp = value.p_VP;
    acao.pEbit = value.p_Ebit;
    acao.pAtivo = value.p_Ativo;
    acao.evEbit = value.eV_Ebit;
    acao.margemBruta = value.margemBruta;
    acao.margemEbit = value.margemEbit;
    acao.margemLiquida = value.margemLiquida;
    acao.pSR = value.pSR;
    acao.precoPorCapitalGiro = value.p_CapitalGiro;
    acao.precoProAtivoCirculante = value.p_AtivoCirculante;
    acao.giroAtivos = value.giroAtivos;
    acao.roe = value.roe;
    acao.roa = value.roa;
    acao.roic = value.roic;
    acao.dividaliquidaPatrimonioLiquido = value.dividaliquidaPatrimonioLiquido;
    acao.dividaLiquidaEbit = value.dividaLiquidaEbit;
    acao.plAtivo = value.pl_Ativo;
    acao.passivoAtivo = value.passivo_Ativo;
    acao.liquidezCorrente = value.liquidezCorrente;
    acao.pegRatio = value.peg_Ratio;
    acao.liquidezMediaDiaria = value.liquidezMediaDiaria;
    acao.vpa = value.vpa;
    acao.lpa = value.lpa;
    acao.valorMercado = value.valorMercado;
    acao.data = new Date();
    acao.pais = pais;
    return acao;
  };

  export default buildAcoes;