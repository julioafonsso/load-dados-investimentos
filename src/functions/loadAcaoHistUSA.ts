import { AppDataSource } from "../config/AppDataSource";
import { ConfigAcao } from "../entities/ConfigAcao";
import loadHist from "./loadAcaoHist";

const main = async () => {
    await AppDataSource.initialize();
    const configRepository = AppDataSource.getRepository(ConfigAcao);

    const acoes = await configRepository.find({
        where: {pais: "U"},
        order: {
            ticker: "ASC"
        }
    })

    loadHist(acoes.map(acao => acao.ticker))
}

main();