import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableTiposPontuacao1685960094629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: "tipo_pontuacao",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true
            },
            {name: "descricao", type: "varchar(100)"},
            {name: "pontos", type: "int"}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
