import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePontuacaoAcao1685960230143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: "pontuacao_acao",
            columns: [{
                name: "id",
                type: "serial",
                isPrimary: true
            },
            {name: "id_tipo", type: "int"},
            {name: "ticker", type: "varchar(10)"}
            ]
        }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
