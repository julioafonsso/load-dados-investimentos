import { DataSource } from "typeorm";
import { Acao } from "../entities/Acao";
import {Indicadores} from "../entities/Indicadores";
import {LucroDividendo} from "../entities/LucroDividendo";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "Investimento",
  synchronize: false,
  logging: false,
  entities: [Acao, Indicadores, LucroDividendo],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});
