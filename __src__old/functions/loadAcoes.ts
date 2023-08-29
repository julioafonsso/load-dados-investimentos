import { log } from "console";
import { AppDataSource } from "../config/AppDataSource";
import { Acao } from "../entities/Acao";
import { getAcoes } from "../sdk/AcoesSDK";

const main = async () =>{
   // const repository = AppDataSource.getRepository(Acao)
    // repository.clear();

    const listAcoes = await getAcoes();

    listAcoes.forEach(a => console.log(a))


}
main();