import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Acao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "category_id", nullable: true })
  categoryId: number;

  @Column({name : "company_id"})
  companyId: number;

  @Column({name: "company_name"})
  companyName: string;

  @Column({name: "sector_name"})
  sectorName: string;
  
  @Column({name: "segment_name"})
  segmentName: string;

  @Column({name: "sub_sector_name"})
  subSectorName: string

  @Column({ nullable: true })
  ticker: string;

  @Column({ name: "price", nullable: true })
  price: number;

}
