drop view v_acoes_filtradas;

create view v_acoes_filtradas as
select *
from acao a
where a.ind_ultima_cotacao = true
and a.divida_liquida_por_ebitda < 3
and a.patrimonio_liquido_porativo > 0
and a.dividendo_yield > 5
and a.preco_por_lucro < 15
and exists (select 1 from opcao o where o.codigo_acao = a.codigo);