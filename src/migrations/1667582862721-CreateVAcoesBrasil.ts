import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVAcoesBrasil1667582862721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create view v_acoes_brasil as
        select
            *
        from
            acao a
        where
            a.pais = 'BRASIL'
            and a.dat_info = (
                select
                    max(dat_info)
                from
                    acao
                where
                    pais = 'BRASIL'
            )
            and a.pl between 0
            and 20;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
