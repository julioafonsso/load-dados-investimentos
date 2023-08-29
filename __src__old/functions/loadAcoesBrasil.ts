import { getAcoesBrasil } from "../sdk/AcoesIndicadoresSDK";
import saveAcoes from "./saveAcoes";

const main = async () => {
  
  const acoes = await getAcoesBrasil();

  console.log("Vai ser inserido " + acoes.length + " registro de ações Brasil");
  
  saveAcoes(acoes)
  
  console.log("Finalizando load Brasil...");

};

main();
