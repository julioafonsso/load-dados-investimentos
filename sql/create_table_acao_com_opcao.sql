CREATE TABLE public.acao_com_opcao (
    id serial4 NOT NULL,
    ticker varchar NULL,
    CONSTRAINT "PK_e99a69295c7e61ba1355bf3a9db" PRIMARY KEY (id)
);

CREATE INDEX acao_com_opcao_ticker_idx ON public.acao_com_opcao (ticker);