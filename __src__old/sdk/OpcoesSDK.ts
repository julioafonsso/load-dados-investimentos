import axios from "axios";

type DataType = {
  expirations: ExpirationsType[];
  underlying_asset: AcaoData;
};

type AcaoData = {
  p: number
}
type ExpirationsType = {
  calls: [];
  puts: [];
  dc: number;
  du: number;
  dt: Date;
};

export type OpcoesType = {};

export type ResponseOpcoesType = {
  success: boolean;
  data: DataType;
};
export const getListOpcoes = async (
  cod_acao: string
): Promise<ResponseOpcoesType> => {
  const res = await axios.get(
    "https://opcoes.net.br/opcoes/bovespa/" + cod_acao + "/json"
  );
  return res.data;
};
