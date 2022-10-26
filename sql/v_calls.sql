create view v_calls as
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
    (
        select
            min(d.vencimento) vencimento,
            max(d.data_ultima_negociacao) data_ultima_negociacao
        from
            opcoes d
        where
            d.vencimento > current_date
    ) datas
where
    o.vencimento = datas.vencimento
    and tipo = 'CALL'
    and o.data_ultima_negociacao = datas.data_ultima_negociacao