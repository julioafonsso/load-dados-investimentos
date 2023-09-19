import axios from "axios";
import {Acao} from "../entities/Acao";

const CATEGORY = {
    BRASIL: 1,
    USA: 12
}

const SETOR = {
    BEN_INDUSTRIAIS: 1,
    CONSUMO_CICLICO: 2,
    CONSUMO_NAO_CICLICO: 3,
    FINANCEIROS_OUTROS: 4,
    MATERIAIS_BASICO: 5,
    PETROLEO_GAS: 6,
    SAUDE: 7,
    TECNLOGIA_INFORMACAO: 8,
    COMUNICACAO: 9,
    UTILIDADE_PUBLICA: 10
}


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

export const getAcoes = async (): Promise<Acao[]> => {
    let res: Acao[] = [];

    let categorias = Object.values(CATEGORY)
    let setores = Object.values(SETOR)


    for (const categoria of categorias) {
        for (const setor of setores) {
            res.push(...await call(categoria, setor))
        }
    }

    return res;
};

const call = async (categoryType: number, setorId: number): Promise<Acao[]> => {

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

