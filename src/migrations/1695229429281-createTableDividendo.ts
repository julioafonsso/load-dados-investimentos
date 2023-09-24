import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTableDividendo1695229429281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "dividendo",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
                { name: "ticker", type: "varchar(10)", isNullable: true },
                { name: "ano", type: "int", isNullable: true },
                { name: "value", type: "decimal", isNullable: true }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
