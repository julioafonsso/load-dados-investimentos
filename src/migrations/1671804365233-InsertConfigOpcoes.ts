import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertConfigOpcoes1671804365233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("insert into config_opcao (data_vencimento, delta_min, delta_max , diff_percentual_min, diff_percentual_max) values ('2023-01-20', 0.2, 0.35, 6, 20);")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
