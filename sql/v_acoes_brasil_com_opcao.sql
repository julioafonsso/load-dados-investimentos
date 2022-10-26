create
or replace view v_acoes_brasil_com_opcao as
select
    v.ticker,
    v.pl,
    v.pvp,
    v.dy,
    vc.codigo,
    vc.preco_acao,
    vc.striker,
    vc.ultimo_preco,
    vc.pm_final,
    vc.percentual_lucro,
    vc.diferenca_percentual,
    vc.delta
from
    v_acoes_brasil v,
    v_calls vc
where
    v.ticker = vc.acao;