import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTableCarteira1704562063023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "carteira",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
                { name: "ticker", type: "varchar(10)", isNullable: true },
                { name: "percentual", type: "decimal", isNullable: true }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
