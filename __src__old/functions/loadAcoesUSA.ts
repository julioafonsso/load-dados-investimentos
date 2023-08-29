import { getAcoesUSA } from "../sdk/AcoesIndicadoresSDK";
import saveAcoes from "./saveAcoes";

const main = async () => {

  const acoes = await getAcoesUSA();

  console.log("Vai ser inserido " + acoes.length + " registro de ações USA");

  saveAcoes(acoes)

  console.log("Finalizando load USA...");

};

main();
