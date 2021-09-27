package com.julioafonsso.investimentos.batchs.opcao.load.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OpcaoResponse {

    private boolean success;

    @JsonProperty("data")
    private Dados dados;


    public boolean isSuccess() {
        return success;
    }

    public Dados getDados() {
        return dados;
    }
}
