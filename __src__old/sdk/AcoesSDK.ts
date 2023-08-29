import axios from "axios";
import { Acao } from "../entities/Acao";

const CATEGORY_ACAO_BRASIL = 1;
const SETOR_BEN_INDUSTRIAIS = 1;
const SETOR_CONSUMO_CICLICO = 2;
const SETOR_CONSUMO_NAO_CICLICO = 3;
const SETOR_FINANCEIROS_OUTROS = 4;
const SETOR_MATERIAIS_BASICO = 5;
const SETOR_PETROLEO_GAS = 6;
const SETOR_SAUDE = 7;
const SETOR_TECNLOGIA_INFORMACAO = 8;
const SETOR_COMUNICACAO = 9;
const SETOR_UTILIDADE_PUBLICA = 10;

export type AcaoType = {
    categoryId: number,
    categoryName: string;
    companyId: number;
    companyName: string;
    sectorName: string;
    segmentName: string;
    subSectorName: string;
    ticker: string;
};

export const getAcoes = async() : Promise<Acao[]> =>{
      let res:  Acao[] = [];

      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_BEN_INDUSTRIAIS))
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_CONSUMO_CICLICO));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_CONSUMO_NAO_CICLICO));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_FINANCEIROS_OUTROS));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_MATERIAIS_BASICO));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_PETROLEO_GAS));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_SAUDE));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_TECNLOGIA_INFORMACAO));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_COMUNICACAO));
      res.push(...await call(CATEGORY_ACAO_BRASIL, SETOR_UTILIDADE_PUBLICA));
      return res;
};

const call = async (categoryType: number, setorId: number) :  Promise<Acao[]> =>{

  const url = `https://statusinvest.com.br/sector/getcompanies?categoryType=${categoryType}&SetorId=${setorId}`;
  
  const res = await axios.get(
      url
      ,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
        }
      }
    );
    return res.data.data;
};

