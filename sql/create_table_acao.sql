CREATE TABLE public.acao (
    id serial4 NOT NULL,
    company_id int4 NULL,
    company_name varchar NULL,
    ticker varchar NULL,
    price numeric NULL,
    pl numeric NULL,
    dy numeric NULL,
    pvp numeric NULL,
    preco_ebit numeric NULL,
    preco_ativo numeric NULL,
    ev_ebit numeric NULL,
    margem_bruta numeric NULL,
    margem_ebit numeric NULL,
    margem_liquida numeric NULL,
    p_sr numeric NULL,
    preco_capital_giro numeric NULL,
    preco_ativo_circulante numeric NULL,
    giro_ativo numeric NULL,
    roe numeric NULL,
    roa numeric NULL,
    roic numeric NULL,
    divida_liquida_patrimonio_liquido numeric NULL,
    divida_liquida_ebit numeric NULL,
    pl_ativo numeric NULL,
    passivo_ativo numeric NULL,
    liquidez_corrent numeric NULL,
    peg_ratio numeric NULL,
    liquidez_diaria numeric NULL,
    vpa numeric NULL,
    lpa numeric NULL,
    valor_mercado numeric NULL,
    dat_info date NOT NULL,
    pais varchar NOT NULL,
    CONSTRAINT "PK_cba660d5bb45e97dd083ea35687" PRIMARY KEY (id)
);

CREATE INDEX acao_data_idx ON public.acao (dat_info, pais);

CREATE INDEX acao_ticker_idx ON public.acao (ticker, dat_info, pais);

CREATE INDEX acao_pl_idx ON public.acao (pl, pvp, dat_info, pais);