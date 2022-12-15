import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableOpcoes1667563360680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: "opcoes", columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true
                },
                { name: "acao", type: "varchar(10)" , isNullable: true},
                { name: "codigo", type: "varchar(10)" , isNullable: true},
                { name: "tipo", type: "varchar(5)", enum: ["CALL", "PUT"] , isNullable: true},
                { name: "vencimento", type: "date" , isNullable: true},
                { name: "preco_acao", type: "decimal" , isNullable: true},
                { name: "preco_acao_real_time", type: "decimal" , isNullable: true},
                { name: "striker", type: "decimal" , isNullable: true},
                { name: "ultimo_preco", type: "decimal" , isNullable: true},
                { name: "data_ultima_negociacao", type: "date" , isNullable: true},
                { name: "volatilidade", type: "decimal" , isNullable: true},
                { name: "delta", type: "decimal" , isNullable: true},
                { name: "ind_formador_mercado", type: "boolean" , isNullable: true},
                { name: "ind_ultimo_negociacao", type: "boolean" , isNullable: true},

            ]
        }))

        await queryRunner.createIndex(
            "opcoes",
            new TableIndex ({
                name: "opcoes_tipo_idx",
                columnNames: ["tipo", "data_ultima_negociacao"],
            }),
        )

        await queryRunner.createIndex(
            "opcoes",
            new TableIndex ({
                name: "opcoes_vencimento_idx",
                columnNames: ["vencimento", "data_ultima_negociacao", "delta", "tipo"],
            }),
        ),

        await queryRunner.createIndex(
            "opcoes",
            new TableIndex ({
                name: "opcoes_acao_idx",
                columnNames: ["vencimento", "data_ultima_negociacao", "delta", "tipo", "acao"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
