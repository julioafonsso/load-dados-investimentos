import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AcaoComOpcoes1667570329503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "acao_com_opcao",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true
                },
                { name: "ticker", type: "varchar(10)" }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
