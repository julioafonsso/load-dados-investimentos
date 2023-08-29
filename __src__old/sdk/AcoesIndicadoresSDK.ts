import axios from "axios";

export type AcaoType = {
  companyId: number;
  companyName: string;
  ticker: string;
  price: number;
  p_L: number;
  dy: number;
  p_VP: number;
  p_Ebit: number;
  p_Ativo: number;
  eV_Ebit: number;
  margemBruta: number;
  margemEbit: number;
  margemLiquida: number;
  pSR: number;
  p_CapitalGiro: number;
  p_AtivoCirculante: number;
  giroAtivos: number;
  roe: number;
  roa: number;
  roic: number;
  dividaliquidaPatrimonioLiquido: number;
  dividaLiquidaEbit: number;
  pl_Ativo: number;
  passivo_Ativo: number;
  liquidezCorrente: number;
  peg_Ratio: number;
  liquidezMediaDiaria: number;
  vpa: number;
  lpa: number;
  valorMercado: number;
};


export const getAcoesBrasil = async (): Promise<AcaoType[]> => {
  const res = await axios.get(
    'https://statusinvest.com.br/category/advancedsearchresult?search={"Sector":"","SubSector":"","Segment":"","my_range":"-20;100","forecast":{"upsideDownside":{"Item1":null,"Item2":null},"estimatesNumber":{"Item1":null,"Item2":null},"revisedUp":true,"revisedDown":true,"consensus":[]},"dy":{"Item1":null,"Item2":null},"p_L":{"Item1":null,"Item2":null},"peg_Ratio":{"Item1":null,"Item2":null},"p_VP":{"Item1":null,"Item2":null},"p_Ativo":{"Item1":null,"Item2":null},"margemBruta":{"Item1":null,"Item2":null},"margemEbit":{"Item1":null,"Item2":null},"margemLiquida":{"Item1":null,"Item2":null},"p_Ebit":{"Item1":null,"Item2":null},"eV_Ebit":{"Item1":null,"Item2":null},"dividaLiquidaEbit":{"Item1":null,"Item2":null},"dividaliquidaPatrimonioLiquido":{"Item1":null,"Item2":null},"p_SR":{"Item1":null,"Item2":null},"p_CapitalGiro":{"Item1":null,"Item2":null},"p_AtivoCirculante":{"Item1":null,"Item2":null},"roe":{"Item1":null,"Item2":null},"roic":{"Item1":null,"Item2":null},"roa":{"Item1":null,"Item2":null},"liquidezCorrente":{"Item1":null,"Item2":null},"pl_Ativo":{"Item1":null,"Item2":null},"passivo_Ativo":{"Item1":null,"Item2":null},"giroAtivos":{"Item1":null,"Item2":null},"receitas_Cagr5":{"Item1":null,"Item2":null},"lucros_Cagr5":{"Item1":null,"Item2":null},"liquidezMediaDiaria":{"Item1":null,"Item2":null},"vpa":{"Item1":null,"Item2":null},"lpa":{"Item1":null,"Item2":null},"valorMercado":{"Item1":null,"Item2":null}}&CategoryType=1'
    ,
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
      }
    }
  );
  return res.data;
};

export const getAcoesUSA = async (): Promise<AcaoType[]> => {
  const res = await axios.get(
    'https://statusinvest.com.br/category/advancedsearchresult?search={"Sector":"","SubSector":"","Segment":"","my_range":"-20;100","forecast":{"upsideDownside":{"Item1":null,"Item2":null},"estimatesNumber":{"Item1":null,"Item2":null},"revisedUp":true,"revisedDown":true,"consensus":[]},"dy":{"Item1":null,"Item2":null},"p_L":{"Item1":null,"Item2":null},"peg_Ratio":{"Item1":null,"Item2":null},"p_VP":{"Item1":null,"Item2":null},"p_Ativo":{"Item1":null,"Item2":null},"margemBruta":{"Item1":null,"Item2":null},"margemEbit":{"Item1":null,"Item2":null},"margemLiquida":{"Item1":null,"Item2":null},"p_Ebit":{"Item1":null,"Item2":null},"eV_Ebit":{"Item1":null,"Item2":null},"dividaLiquidaEbit":{"Item1":null,"Item2":null},"dividaliquidaPatrimonioLiquido":{"Item1":null,"Item2":null},"p_SR":{"Item1":null,"Item2":null},"p_CapitalGiro":{"Item1":null,"Item2":null},"p_AtivoCirculante":{"Item1":null,"Item2":null},"roe":{"Item1":null,"Item2":null},"roic":{"Item1":null,"Item2":null},"roa":{"Item1":null,"Item2":null},"liquidezCorrente":{"Item1":null,"Item2":null},"pl_Ativo":{"Item1":null,"Item2":null},"passivo_Ativo":{"Item1":null,"Item2":null},"giroAtivos":{"Item1":null,"Item2":null},"receitas_Cagr5":{"Item1":null,"Item2":null},"lucros_Cagr5":{"Item1":null,"Item2":null},"liquidezMediaDiaria":{"Item1":null,"Item2":null},"vpa":{"Item1":null,"Item2":null},"lpa":{"Item1":null,"Item2":null},"valorMercado":{"Item1":null,"Item2":null}}&CategoryType=12',
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
      }
    }
  );
  return res.data;
};

