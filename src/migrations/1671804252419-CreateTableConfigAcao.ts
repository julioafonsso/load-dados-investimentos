import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableConfigAcao1671804252419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "config_acao",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
            { name: "ticker", type: "varchar(10)", isNullable: true },
            { name: "ind_opcao", type: "boolean", isNullable: true },
            { name: "ind_ibovespa", type: "boolean", isNullable: true },
            { name: "ind_sp500", type: "boolean", isNullable: true },
            { name: "pais", type: "varchar(1)", isNullable: false }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
