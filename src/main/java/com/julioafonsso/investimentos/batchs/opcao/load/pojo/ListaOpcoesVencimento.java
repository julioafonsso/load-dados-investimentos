package com.julioafonsso.investimentos.batchs.opcao.load.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;
import java.util.List;

public class ListaOpcoesVencimento {

    @JsonProperty("du")
    private int qtdDiasUteis;

    @JsonProperty("dc")
    private int qtdDiasCorridos;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("dt")
    private Date dataVencimento;

    @JsonProperty("calls")
    private List<Object[]> listaCalls;

    @JsonProperty("puts")
    private List<Object[]> listaPuts;

    public int getQtdDiasUteis() {
        return qtdDiasUteis;
    }

    public int getQtdDiasCorridos() {
        return qtdDiasCorridos;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public List<Object[]> getListaCalls() {
        return listaCalls;
    }

    public List<Object[]> getListaPuts() {
        return listaPuts;
    }
}
