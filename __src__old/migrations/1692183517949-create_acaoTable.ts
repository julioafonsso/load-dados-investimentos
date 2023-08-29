import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAcaoTable1692183517949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "acao",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
            { name: "ticker", type: "varchar(10)", isNullable: true },
            { name: "category_id", type: "int", isNullable: true },
            { name: "company_id", type: "int", isNullable: true },
            { name: "company_name", type: "varchar(200)" },
            { name: "sector_name", type: "varchar(200)" },
            { name: "sector_name ", type: "varchar(200)" },
            { name: "sub_sector_name ", type: "varchar(200)" }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
