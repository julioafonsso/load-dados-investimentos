import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVPut1669126340163 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create or replace view v_put as
        select
            o.acao,
            o.codigo,
            o.vencimento,
            o.preco_acao_real_time preco_acao,
            o.ultimo_preco,
            o.striker,
            o.striker + o.ultimo_preco as PM_FINAL,
            round(
                ((o.striker * 100) / o.preco_acao_real_time) - 100,
                2
            ) diferenca_percentual,
            round(
                (
                    ((o.striker + o.ultimo_preco) * 100) / o.preco_acao_real_time
                ) - 100,
                2
            ) PM_final_percentual,
            round(o.ultimo_preco / o.striker * 100, 2) percentual_lucro,
            round(
                case
                    when o.preco_acao_real_time > o.striker then (o.preco_acao_real_time - o.striker) / o.striker * 100
                    else 0
                end,
                2
            ) percentual_intriseco,
            round(
                case
                    when o.preco_acao_real_time > o.striker then (
                        o.ultimo_preco - (o.preco_acao_real_time - o.striker)
                    ) / o.striker * 100
                    else o.ultimo_preco / o.striker * 100
                end,
                2
            ) percentual_extrinseco,
            o.delta
        from
            opcoes o,
            data_vencimento_opcao dvo
        where
            o.vencimento = dvo.data_vencimento
            and o.ind_ultimo_negociacao = true 
            and tipo = 'PUT'
                `);
            }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
