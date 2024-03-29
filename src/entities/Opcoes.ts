import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Opcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  acao: string;

  @Column()
  codigo: string;

  @Column()
  tipo: string;

  @Column({ type: "date" })
  vencimento: Date;

  @Column({ type: "decimal", name: "preco_acao" })
  precoAcao: number;

  @Column({ type: "decimal" })
  striker: number;

  @Column({ type: "decimal", name: "ultimo_preco" })
  ultimoPreco: number;

  @Column({ type: "date", name: "data_ultima_negociacao" })
  dataUltimaNegociacao: Date;

  @Column({ type: "decimal", nullable: true })
  volatilidade: number;

  @Column({ type: "decimal", nullable: true })
  delta: number;

  @Column({type : "boolean", name: "ind_formador_mercado"})
  indFormadorMercado : boolean


  isEqual = (op: Opcao): boolean => {
    return this.codigo == op.codigo;
  };
}
