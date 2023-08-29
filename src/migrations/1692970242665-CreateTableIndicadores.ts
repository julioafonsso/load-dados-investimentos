import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTableIndicadores1692970242665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "indicadores",
                columns: [{
                    name: "id",
                    type: "serial",
                    isPrimary: true
                },
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
                    { name: "ano", type: "int", isNullable: true },
                    { name: "ind_ultimo", type: "boolean", isNullable: true },

                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
