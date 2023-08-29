import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"config_opcao"})
export class ConfigOpcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({  name: "data_vencimento", nullable: true })
  dataVencimento: Date;

  @Column({  name: "data_ultima_negociacao", nullable: true })
  dataUltimaNegociacao: Date;


  @Column({  name: "delta_min", nullable: true })
  deltaMin: number;


  @Column({  name: "delta_max", nullable: true })
  deltaMax: number;

  @Column({  name: "diff_percentual_min", nullable: true })
  diffPercentualMin: number;


  @Column({  name: "diff_percentual_max", nullable: true })
  diffPercentualMax: number;


}
