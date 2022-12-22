import { AppDataSource } from "../config/AppDataSource";
import { getAcoesUSA } from "../sdk/AcoesSDK";
import buildAcoes from "./buildAcoes";



const main = async () => {
  await AppDataSource.initialize();
  
  const acoes = await getAcoesUSA();

  console.log("Vai ser inserido " + acoes.length + " registro de ações USA");

  acoes.forEach((acao) => {
    AppDataSource.manager.save(buildAcoes(acao, "USA"));
  });

  console.log("Finalizando load USA...");

};

main();
