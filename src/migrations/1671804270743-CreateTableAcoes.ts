import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableAcoes1671804270743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "acao",
                columns: [{
                    name: "id",
                    type: "serial",
                    isPrimary: true
                },
                { name: "company_id", type: "int", isNullable: true },
                { name: "company_name", type: "varchar(250)", isNullable: true },
                { name: "ticker", type: "varchar(10)", isNullable: true },
                { name: "price", type: "decimal", isNullable: true },
                { name: "pl", type: "decimal", isNullable: true },
                { name: "dy", type: "decimal", isNullable: true },
                { name: "pvp", type: "decimal", isNullable: true },
                { name: "preco_ebit", type: "decimal", isNullable: true },
                { name: "preco_ativo", type: "decimal", isNullable: true },
                { name: "ev_ebit", type: "decimal", isNullable: true },
                { name: "margem_bruta", type: "decimal", isNullable: true },
                { name: "margem_ebit", type: "decimal", isNullable: true },
                { name: "margem_liquida", type: "decimal", isNullable: true },
                { name: "p_sr", type: "decimal", isNullable: true },
                { name: "preco_ativo_circulante", type: "decimal", isNullable: true },
                { name: "preco_capital_giro", type: "decimal", isNullable: true },
                { name: "giro_ativo", type: "decimal", isNullable: true },
                { name: "roe", type: "decimal", isNullable: true },
                { name: "roa", type: "decimal", isNullable: true },
                { name: "roic", type: "decimal", isNullable: true },
                { name: "divida_liquida_patrimonio_liquido", type: "decimal", isNullable: true },
                { name: "divida_liquida_ebit", type: "decimal", isNullable: true },
                { name: "pl_ativo", type: "decimal", isNullable: true },
                { name: "passivo_ativo", type: "decimal", isNullable: true },
                { name: "liquidez_corrente", type: "decimal", isNullable: true },
                { name: "peg_ratio", type: "decimal", isNullable: true },
                { name: "liquidez_diaria", type: "decimal", isNullable: true },
                { name: "vpa", type: "decimal", isNullable: true },
                { name: "lpa", type: "decimal", isNullable: true },
                { name: "valor_mercado", type: "decimal", isNullable: true },
                { name: "dat_info", type: "date", isNullable: true },
                { name: "ind_ultimo", type: "boolean", isNullable: true },
                
                ]
            }
        ))

        await queryRunner.createIndex(
            "acao",
            new TableIndex({
                name: "acao_data_idx",
                columnNames: ["ind_ultimo"],
            }),
        )

        await queryRunner.createIndex(
            "acao",
            new TableIndex({
                name: "acao_ticker_idx",
                columnNames: ["ticker", "ind_ultimo"],
            }),
        )
        await queryRunner.createIndex(
            "acao",
            new TableIndex({
                name: "acao_pl_pvp_idx",
                columnNames: ["pl", "pvp", "ind_ultimo"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
