import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LucroDividendo {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: false })
    ticker: string;

    @Column({name : "ano", nullable: false})
    ano: number;


    @Column({ name: "value", nullable: true })
    value: number;


    @Column({name : "payout", nullable: true})
    payout: number;

    @Column({name : "lucro_liquido", nullable: true})
    lucroLiquido: number;

    @Column({name: "crescimento_lucro", nullable: true})
    crescimentoLucro: number;

}
