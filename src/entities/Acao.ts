import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Acao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: "company_id" })
  companyId: number;
  @Column({ nullable: true, name: "company_name" })
  companyName: string;
  @Column({ nullable: true })
  ticker: string;
  @Column("decimal", { nullable: true })
  price: number;
  @Column("decimal", { nullable: true })
  pl: number;
  @Column("decimal", { nullable: true })
  dy: number;
  @Column("decimal", { nullable: true })
  pvp: number;
  @Column("decimal", { nullable: true, name: "preco_ebit" })
  pEbit: number;
  @Column("decimal", { nullable: true, name: "preco_ativo" })
  pAtivo: number;
  @Column("decimal", { nullable: true, name: "ev_ebit" })
  evEbit: number;
  @Column("decimal", { nullable: true, name: "margem_bruta" })
  margemBruta: number;
  @Column("decimal", { nullable: true, name: "margem_ebit" })
  margemEbit: number;
  @Column("decimal", { nullable: true, name: "margem_liquida" })
  margemLiquida: number;
  @Column("decimal", { nullable: true, name: "p_sr" })
  pSR: number;
  @Column("decimal", { nullable: true, name: "preco_capital_giro" })
  precoPorCapitalGiro: number;
  @Column("decimal", { nullable: true, name: "preco_ativo_circulante" })
  precoProAtivoCirculante: number;
  @Column("decimal", { nullable: true, name: "giro_ativo" })
  giroAtivos: number;
  @Column("decimal", { nullable: true })
  roe: number;
  @Column("decimal", { nullable: true })
  roa: number;
  @Column("decimal", { nullable: true })
  roic: number;
  @Column("decimal", {
    nullable: true,
    name: "divida_liquida_patrimonio_liquido",
  })
  dividaliquidaPatrimonioLiquido: number;
  @Column("decimal", { nullable: true, name: "divida_liquida_ebit" })
  dividaLiquidaEbit: number;
  @Column("decimal", { nullable: true, name: "pl_ativo" })
  plAtivo: number;
  @Column("decimal", { nullable: true, name: "passivo_ativo" })
  passivoAtivo: number;
  @Column("decimal", { nullable: true, name: "liquidez_corrent" })
  liquidezCorrente: number;
  @Column("decimal", { nullable: true, name: "peg_ratio" })
  pegRatio: number;
  @Column("decimal", { nullable: true, name: "liquidez_diaria" })
  liquidezMediaDiaria: number;
  @Column("decimal", { nullable: true })
  vpa: number;
  @Column("decimal", { nullable: true })
  lpa: number;
  @Column("decimal", { nullable: true, name: "valor_mercado" })
  valorMercado: number;

  @Column()
  dataLoad: Date;

  @Column()
  pais: string;
}
