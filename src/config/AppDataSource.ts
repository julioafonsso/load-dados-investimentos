import { DataSource } from "typeorm";
import { Acao } from "../entities/Acao";
import {Indicadores} from "../entities/Indicadores";
import {Dividendo} from "../entities/Dividendo";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "Investimento",
  synchronize: false,
  logging: false,
  entities: [Acao, Indicadores, Dividendo],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});
