import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dividendo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "value", nullable: false })
    value: number;

    @Column({name : "ano", nullable: false})
    ano: number;

    @Column({ nullable: true })
    ticker: string;

}
