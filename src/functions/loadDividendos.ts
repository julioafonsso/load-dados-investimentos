import {CATEGORY} from "../enums/Consts";
import axios from "axios";
import {AppDataSource} from "../config/AppDataSource";
import {Acao} from "../entities/Acao";
import {Dividendo} from "../entities/Dividendo";
import {Repository} from "typeorm";
import {setTimeout} from "timers/promises";

const URL = new Map()
URL.set(CATEGORY.BRASIL, "https://statusinvest.com.br/acao/companytickerprovents");
URL.set(CATEGORY.USA, "https://statusinvest.com.br/stock/companytickerprovents");

export type DividendoType = {
    rank: number,
    value: number
}

const main = async () =>{
    await AppDataSource.initialize();
    const repository = AppDataSource.getRepository(Dividendo)
    const repositoryAcao = AppDataSource.getRepository(Acao)

    await repository.clear();

    await loadDividendos(repository, repositoryAcao, CATEGORY.BRASIL);
    await loadDividendos(repository, repositoryAcao, CATEGORY.USA);


}

const loadDividendos = async (repository: Repository<Dividendo>, acaoRepository: Repository<Acao>, categoryId: number) =>{

    const listAcoes = await acaoRepository.findBy({categoryId: categoryId});

    for (const acao of listAcoes) {
        (await getDividendo(categoryId, acao.ticker))
            .forEach(dividendo => {
                let entity = new Dividendo()
                entity.ano = dividendo.rank;
                entity.value = dividendo.value
                entity.ticker = acao.ticker;

            repository.save(entity)
        })
        await setTimeout(200); // Se nao tive esse break, a API recusa por excesso de requests
    }

}
const getDividendo = async (categoryId: number, ticker: string) : Promise<DividendoType[]>=> {

    const url = URL.get(categoryId);

    const res = await axios.get(
        `${url}?ticker=${ticker}`
        ,
        {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
            }
        }
    );

    return res.data['assetEarningsYearlyModels']
}


main().then();