create view v_calls as
select
    o.acao,
    o.codigo,
    o.vencimento,
    o.preco_acao_real_time preco_acao,
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
    opcoes o
where
    o.vencimento > current_date
    and tipo = 'CALL'