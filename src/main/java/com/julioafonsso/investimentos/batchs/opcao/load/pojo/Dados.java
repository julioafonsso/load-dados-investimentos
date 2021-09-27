package com.julioafonsso.investimentos.batchs.opcao.load.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Dados {

    @JsonProperty("expirations")
    private List<ListaOpcoesVencimento> opcoesPorVencimento;

    public List<ListaOpcoesVencimento> getOpcoesPorVencimento() {
        return opcoesPorVencimento;
    }

}
