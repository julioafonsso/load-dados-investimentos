import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableVencimentoOpcoes1667583496375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({name:"vencimento_opcao", columns:[
            {name: "data_vencimento", type: "date"}
        ]}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
