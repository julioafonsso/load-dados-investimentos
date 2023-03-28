import { AppDataSource } from "../config/AppDataSource";
import { ConfigAcao } from "../entities/ConfigAcao";
import { Opcao } from "../entities/Opcoes";
import { getListOpcoes } from "../sdk/OpcoesSDK";
import moment from "moment";
import { Repository } from "typeorm";
import { ConfigOpcao } from "../entities/ConfigOpcao";
import { Acao } from "../entities/Acao";

const main = async () => {
  await AppDataSource.initialize();
  console.log(new Date())
  const configAcaoReposoitory = AppDataSource.getRepository(ConfigAcao);
  const configOpcaoRepository = AppDataSource.getRepository(ConfigOpcao);
  const opcaoRepository = AppDataSource.getRepository(Opcao);
  const list = await configAcaoReposoitory.findBy({ pais: "B", indOpcao: true });
  const allPromisses = []
 
  for(const acao of list){
    const responseOpcoes = await getListOpcoes(acao.ticker);
    for(const ex of responseOpcoes.data.expirations){
      allPromisses.push(saveOpcao(ex.calls, "CALL", acao, ex.dt, responseOpcoes.data.underlying_asset.p, opcaoRepository));
      allPromisses.push(saveOpcao(ex.puts, "PUT", acao, ex.dt, responseOpcoes.data.underlying_asset.p, opcaoRepository));
    }
  }
  
  await Promise.all(allPromisses);
  const configOpcao = (await configOpcaoRepository.find())[0];
  const qb = opcaoRepository.createQueryBuilder("qb");
  qb.select("MAX(qb.dataUltimaNegociacao)", "ultimaNegociacao")
    .addSelect("MIN(qb.vencimento)", "vencimento")
    .where("qb.vencimento > :data ", { data: new Date() });
  const response = await qb.getRawOne()
  configOpcao.dataUltimaNegociacao = response["ultimaNegociacao"]
  configOpcao.dataVencimento = response["vencimento"];
  configOpcaoRepository.save(configOpcao);


  console.log(configOpcao)
  console.log(new Date())

};

const saveOpcao = async (opcoes: [], type: string, config: ConfigAcao, data: Date, precoAcao: number, repository: Repository<Opcao>): Promise<boolean> => {
  for (const item of opcoes) {
    if (item[7] !== null) {
      const opcao = buildOpcoes(
        config.ticker,
        item,
        type,
        data,
        precoAcao
      );

      const opcaoBD = await repository.findOne({
        where: {
          codigo: opcao.codigo,
          dataUltimaNegociacao: opcao.dataUltimaNegociacao,
        },
      });

      if (opcaoBD != null)
        await repository.remove(opcaoBD);
      await repository.save(opcao);
    }
  };
  return true;
}
const buildOpcoes = (
  codigoAcao: string,
  values: any[],
  tipo: string,
  dataVencimento: Date,
  precoAcao: number
): Opcao => {
  const opcoes = new Opcao();
  opcoes.codigo = codigoAcao.substring(0, 4) + values[0];
  opcoes.acao = codigoAcao;
  opcoes.tipo = tipo;
  opcoes.vencimento = dataVencimento;
  opcoes.precoAcao = precoAcao;
  opcoes.striker = values[3];
  opcoes.ultimoPreco = values[6];
  opcoes.dataUltimaNegociacao = moment(values[8], "DD/MM/YYYY").toDate();
  opcoes.volatilidade = values[17];
  opcoes.delta = values[18];
  opcoes.indFormadorMercado = values[1]

  return opcoes;
};

main();
