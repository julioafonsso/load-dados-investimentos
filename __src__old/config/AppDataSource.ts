import { DataSource } from "typeorm";
import { Acao } from "../entities/Acao__";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "Investimento",
  synchronize: false,
  logging: false,
  entities: [Acao],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});
