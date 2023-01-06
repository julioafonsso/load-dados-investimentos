import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableConfigOpcao1671804292734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "config_opcao",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
            {name: "data_vencimento", type: "date"},
            {name: "data_ultima_negociacao", type: "date"},
            {name: "delta_min", type: "decimal"},
            {name: "delta_max", type: "decimal"},
            {name: "diff_percentual_min", type: "decimal"},
            {name: "diff_percentual_max", type: "decimal"},
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
