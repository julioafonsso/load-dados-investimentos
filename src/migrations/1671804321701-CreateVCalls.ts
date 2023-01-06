import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVCalls1671804321701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create or replace view v_calls as
        select
            o.acao,
            o.codigo,
            o.vencimento,
            o.preco_acao preco_acao,
            o.ultimo_preco,
            o.striker,
            o.striker + o.ultimo_preco as PM_FINAL,
            round(
                ((o.striker * 100) / o.preco_acao) - 100,
                2
            ) diferenca_percentual,
            round(
                (
                    ((o.striker + o.ultimo_preco) * 100) / o.preco_acao
                ) - 100,
                2
            ) PM_final_percentual,
            round(o.ultimo_preco / o.striker * 100, 2) percentual_lucro,
            round(
                case
                    when o.preco_acao > o.striker then (o.preco_acao - o.striker) / o.striker * 100
                    else 0
                end,
                2
            ) percentual_intriseco,
            round(
                case
                    when o.preco_acao > o.striker then (
                        o.ultimo_preco - (o.preco_acao - o.striker)
                    ) / o.striker * 100
                    else o.ultimo_preco / o.striker * 100
                end,
                2
            ) percentual_extrinseco,
            o.delta
        from
            opcao o,
            config_opcao cfg
        where
            o.vencimento = cfg.data_vencimento
            and o.data_ultima_negociacao = cfg.data_ultima_negociacao
            and tipo = 'CALL'
                `);
            }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}