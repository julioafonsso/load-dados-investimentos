import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"config_acao"})
export class ConfigAcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  ticker: string;

  @Column("boolean", { name:"ind_opcao", nullable: true })
  indOpcao: boolean


  @Column("boolean", { name:"ind_ibovespa", nullable: true })
  indIbovespa: boolean

  @Column("boolean", { name:"ind_sp500", nullable: true })
  indSP500: boolean

  @Column( { name:"pais", nullable: true })
  pais: string
}
