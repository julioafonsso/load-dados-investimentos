import { AppDataSource } from "../config/AppDataSource";
import { Acao } from "../entities/Acao";
import { getAcoes } from "../sdk/AcoesSDK";

const main = async () =>{
    await AppDataSource.initialize();
    const repository = AppDataSource.getRepository(Acao)
    await repository.clear();

    const listAcoes = await getAcoes();

    listAcoes.forEach(acao=> repository.save(acao));

}
main().then();