import { AppDataSource } from "../config/AppDataSource";
import { getAcoesBrasil, getAcoesUSA } from "../sdk/AcoesSDK";
import buildAcoes from "./buildAcoes";

const loadUsa = async () => {
  console.log("Iniciando load USA...");

  const acoes = await getAcoesUSA();

  console.log("Vai ser inserido " + acoes.length + " registro de ações USA");

  acoes.forEach((acao) => {
    AppDataSource.manager.save(createAcao(acao, "USA"));
  });

  console.log("Finalizando load USA...");
};

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
