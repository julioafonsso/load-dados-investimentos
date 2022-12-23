import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVAcoesBrasil1671804306366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create or replace view v_acoes_brasil as
        select
            a.*,
            cf.ind_opcao
        from
            acao a,
            config_acao cf
        where
            a.ticker = cf.ticker
            and a.ind_ultimo = true
            and a.pl between 0 and 20
            and cf.pais ='B';
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
