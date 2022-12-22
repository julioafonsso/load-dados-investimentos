import { AppDataSource } from "../config/AppDataSource";
import { getAcoesBrasil, getAcoesUSA } from "../sdk/AcoesSDK";
import buildAcoes from "./buildAcoes";



const main = async () => {
  debugger
  await AppDataSource.initialize();
  
  const acoes = await getAcoesBrasil();

  console.log("Vai ser inserido " + acoes.length + " registro de ações Brasil");

  acoes.forEach((acao) => {
    AppDataSource.manager.save(buildAcoes(acao, "BRASIL"));
  });

  console.log("Finalizando load Brasil...");

};

main();
