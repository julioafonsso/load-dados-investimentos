import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVHistAcao1672420205385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create or replace view v_hist_acao as
        select
                ha.ticker ,
                trunc(avg(pl),2) pl, 
                trunc(avg(lpa),2) lpa,
                trunc(avg(pvp),2) pvp,
                trunc(avg(vpa),2) vpa,
                trunc(avg(dy),2) dy
        from
            hist_acao ha 
        group by
            ha.ticker ;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
