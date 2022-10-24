import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AcaoComOpcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  ticker: string;
}
