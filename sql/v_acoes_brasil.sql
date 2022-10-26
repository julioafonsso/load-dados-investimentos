create view v_acoes_brasil as
select
    *
from
    acao a
where
    a.pais = 'BRASIL'
    and a.dat_info = (
        select
            max(dat_info)
        from
            acao
        where
            pais = 'BRASIL'
    )
    and a.pl between 0
    and 20
    and a.pvp < 2.5;