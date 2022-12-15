CREATE TABLE public.opcoes (
    id serial4 NOT NULL,
    acao varchar NOT NULL,
    codigo varchar NOT NULL,
    tipo varchar NOT NULL,
    vencimento date NOT NULL,
    preco_acao numeric NOT NULL,
    preco_acao_real_time numeric NOT NULL,
    striker numeric NOT NULL,
    ultimo_preco numeric NOT NULL,
    data_ultima_negociacao date NOT NULL,
    volatilidade numeric NULL,
    delta numeric NULL,
    ind_formador_mercado boolean,
    ind_ultimo_negociacao boolean
    CONSTRAINT "PK_2eabf6b1246ac3730fce966e137" PRIMARY KEY (id)
);

CREATE INDEX opcoes_tipo_idx ON public.opcoes (tipo, data_ultima_negociacao);

CREATE INDEX opcoes_vencimento_idx ON public.opcoes (vencimento, data_ultima_negociacao, delta, tipo);

CREATE INDEX opcoes_acao_idx ON public.opcoes (
    acao,
    vencimento,
    tipo,
    data_ultima_negociacao,
    delta
);