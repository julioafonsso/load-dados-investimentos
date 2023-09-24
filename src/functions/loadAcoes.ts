import { AppDataSource } from "../config/AppDataSource";
import { Acao } from "../entities/Acao";
import {CATEGORY, SETOR} from "../enums/Consts";
import axios from "axios";

const main = async () =>{
    await AppDataSource.initialize();
    const repository = AppDataSource.getRepository(Acao)
    await repository.clear();

    let categorias = Object.values(CATEGORY)
    let setores = Object.values(SETOR)


    for (const categoria of categorias) {
        for (const setor of setores) {
            (await getAcoes(categoria, setor))
                .forEach(acao => repository.save(acao))
        }
    }


}

const getAcoes = async (categoryType: number, setorId: number): Promise<Acao[]> => {

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
}
main().then();