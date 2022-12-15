import { AppDataSource } from "../config/AppDataSource";
import { AcaoComOpcao } from "../entities/AcoesComOpcao";
import { Opcoes } from "../entities/Opcoes";
import { getListOpcoes } from "../sdk/OpcoesSDK";
import moment from "moment";

const main = async () => {
  await AppDataSource.initialize();
  const acoesComOpcaoRepository = AppDataSource.getRepository(AcaoComOpcao);
  const opcaoRepository = AppDataSource.getRepository(Opcoes);
  const list = await acoesComOpcaoRepository.find();

  const listOldOpcoes = await opcaoRepository.findBy({indFormadorMercado: true});
  listOldOpcoes.forEach(opcoes => {
    opcoes.indUltimaNegociacao = false;
    opcaoRepository.save(opcoes);
  })
  
  list.forEach((acoes) => {
    getListOpcoes(acoes.ticker).then((opcoes) => {
      opcoes.data.expirations.forEach(async (ex) => {
        ex.calls.forEach(async (calls) => {
          if (calls[7] !== null) {
            const opcao = buildOpcoes(
              acoes.ticker,
              calls,
              "CALL",
              ex.dt,
              opcoes.data.p
            );
            const opcaoBD = await opcaoRepository.findOne({
              where: {
                codigo: opcao.codigo,
                dataUltimaNegociacao: opcao.dataUltimaNegociacao,
              },
            });

            if (opcaoBD == null) opcaoRepository.save(opcao);
          }
        });

        ex.puts.forEach(async (puts) => {
          if (puts[7] !== null) {
            const opcao = buildOpcoes(
              acoes.ticker,
              puts,
              "PUT",
              ex.dt,
              opcoes.data.p
            );

            const opcaoBD = await opcaoRepository.findOne({
              where: {
                codigo: opcao.codigo,
                dataUltimaNegociacao: opcao.dataUltimaNegociacao,
              },
            });

            if (opcaoBD == null) opcaoRepository.save(opcao);
          }
        });
      });
    });
  });
};

const buildOpcoes = (
  codigoAcao: string,
  values: any[],
  tipo: string,
  dataVencimento: Date,
  precoAcao: number
): Opcoes => {
  const opcoes = new Opcoes();
  opcoes.codigo = codigoAcao.substring(0, 4) + values[0];
  opcoes.acao = codigoAcao;
  opcoes.tipo = tipo;
  opcoes.vencimento = dataVencimento;
  opcoes.precoAcao = precoAcao;
  opcoes.precoAcaoRealTime = precoAcao;
  opcoes.striker = values[3];
  opcoes.ultimoPreco = values[5];
  opcoes.dataUltimaNegociacao = moment(values[7], "DD/MM/YYYY").toDate();
  opcoes.volatilidade = values[10];
  opcoes.delta = values[11];
  opcoes.indFormadorMercado = values[1]
  opcoes.indUltimaNegociacao = true;

  return opcoes;
};

main();
