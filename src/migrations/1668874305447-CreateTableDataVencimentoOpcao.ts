import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableDataVencimentoOpcao1668874305447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "data_vencimento_opcao",
            columns:[{
                name: "data_vencimento",
                type:"date"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
