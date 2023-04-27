import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVAcoesOpcao1682592889748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create or replace view v_acoes_opcao as
        select vab.ticker, 
            vab.company_name, 
            vab.pl , 
            vab.pvp , 
            vab.dy, 
            d10.percentual as percentual_d10, 
            d10.diferenca_percentual as diff_d10,
            d20.percentual as percentual_d20, 
            d20.diferenca_percentual as diff_d20,
            d30.percentual as percentual_d30, 
            d30.diferenca_percentual as diff_d30,
            d40.percentual as percentual_d40, 
            d40.diferenca_percentual as diff_d40,
            d50.percentual as percentual_d50, 
            d50.diferenca_percentual as diff_d50
            from v_acao_brasil vab , 
                (select vc.acao, 
                    max(vc.percentual_lucro) percentual,
                    min(vc.diferenca_percentual) diferenca_percentual from v_calls vc 
                    where delta between 0.001 and 0.1  group by vc.acao ) d10,
                (select vc.acao, 
                    max(vc.percentual_lucro) percentual,
                    min(vc.diferenca_percentual) diferenca_percentual from v_calls vc 
                    where delta between 0.001 and 0.2 group by vc.acao ) d20,
                (select vc.acao, 
                    max(vc.percentual_lucro) percentual,
                    min(vc.diferenca_percentual) diferenca_percentual from v_calls vc 
                    where delta between 0.001 and 0.3  group by vc.acao ) d30,
                (select vc.acao, 
                    max(vc.percentual_lucro) percentual,
                    min(vc.diferenca_percentual) diferenca_percentual from v_calls vc 
                    where delta between 0.001 and 0.4  group by vc.acao ) d40,
                (select vc.acao, 
                    max(vc.percentual_lucro) percentual,
                    min(vc.diferenca_percentual) diferenca_percentual from v_calls vc 
                    where delta between 0.001 and 0.5  group by vc.acao ) d50
        where vab.ticker  = d10.acao
        and vab.ticker  = d20.acao
        and vab.ticker  = d30.acao
        and vab.ticker  = d40.acao
        and vab.ticker  = d50.acao
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
