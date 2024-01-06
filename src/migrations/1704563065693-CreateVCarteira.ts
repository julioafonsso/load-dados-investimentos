import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVCarteira1704563065693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
              create or replace view v_carteira as
            select t1.ticker, sum(t1.percentual) percentual
            from (select coalesce(e.ticker_acao, c.ticker) ticker,
                         CASE
                             WHEN e.percentual IS NOT NULL THEN
                                 e.percentual * c.percentual / 100
                             ELSE c.percentual
                             END                           percentual
                  from carteira c
                           left join etf e on c.ticker = e.ticker) t1
            group by t1.ticker
            order by percentual desc;
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
