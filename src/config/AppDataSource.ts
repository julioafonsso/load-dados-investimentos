import { DataSource } from "typeorm";
import { Acao } from "../entities/Acao";
import { ConfigAcao } from "../entities/ConfigAcao";
import { ConfigOpcao } from "../entities/ConfigOpcao";
import { HistAcao } from "../entities/HistAcao";
import { Opcao } from "../entities/Opcoes";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "Investimento",
  synchronize: false,
  logging: false,
  entities: [Acao, ConfigAcao, Opcao, HistAcao, ConfigOpcao],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});
