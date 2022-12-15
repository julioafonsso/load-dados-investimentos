import { DataSource } from "typeorm";
import { Acao } from "../entities/Acao";
import { AcaoComOpcao } from "../entities/AcoesComOpcao";
import { Opcoes } from "../entities/Opcoes";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "Investimento",
  synchronize: false,
  logging: false,
  entities: [Acao, AcaoComOpcao, Opcoes],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});
