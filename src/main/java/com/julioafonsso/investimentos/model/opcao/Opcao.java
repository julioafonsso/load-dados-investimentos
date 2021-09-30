package com.julioafonsso.investimentos.model.opcao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Opcao {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    String codigo;

    @Column
    private String codigoAcao;

    @Column
    private String tipo;

    @Column(precision = 4, scale = 2)
    private Double valorStrike;

    @Column
    private LocalDate dataVencimento;

    @Column
    private boolean indFormadorMercado;

    @Column
    private String modelo;

    @Column(precision = 4, scale = 2)
    private Double cotacao;

    @Column
    private LocalDate dataCotacao;

    @Column
    private Integer numeroNegociacao;

    @Column
    private Double volume;

    @Column(precision = 4, scale = 2)
    private Double volatilidade;

    @Column(precision = 4, scale = 4)
    private Double delta;

    @Column(precision = 4, scale = 4)
    private Double gamma;

    @Column(precision = 4, scale = 2)
    private Double thetaDinheiro;

    @Column(precision = 4, scale = 2)
    private Double thetaPercentual;

    @Column(precision = 4, scale = 4)
    private Double vega;

    @Column
    private Boolean indUltimaCotacao;


    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getCodigoAcao() {
        return codigoAcao;
    }

    public void setCodigoAcao(String codigoAcao) {
        this.codigoAcao = codigoAcao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Double getValorStrike() {
        return valorStrike;
    }

    public void setValorStrike(Double valorStrike) {
        this.valorStrike = valorStrike;
    }

    public LocalDate getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(LocalDate dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public boolean isIndFormadorMercado() {
        return indFormadorMercado;
    }

    public void setIndFormadorMercado(boolean indFormadorMercado) {
        this.indFormadorMercado = indFormadorMercado;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Double getCotacao() {
        return cotacao;
    }

    public void setCotacao(Double cotacao) {
        this.cotacao = cotacao;
    }

    public LocalDate getDataCotacao() {
        return dataCotacao;
    }

    public void setDataCotacao(LocalDate dataCotacao) {
        this.dataCotacao = dataCotacao;
    }

    public Integer getNumeroNegociacao() {
        return numeroNegociacao;
    }

    public void setNumeroNegociacao(Integer numeroNegociacao) {
        this.numeroNegociacao = numeroNegociacao;
    }

    public Double getVolume() {
        return volume;
    }

    public void setVolume(Double volume) {
        this.volume = volume;
    }

    public Double getVolatilidade() {
        return volatilidade;
    }

    public void setVolatilidade(Double volatilidade) {
        this.volatilidade = volatilidade;
    }

    public Double getDelta() {
        return delta;
    }

    public void setDelta(Double delta) {
        this.delta = delta;
    }

    public Double getGamma() {
        return gamma;
    }

    public void setGamma(Double gamma) {
        this.gamma = gamma;
    }

    public Double getThetaDinheiro() {
        return thetaDinheiro;
    }

    public void setThetaDinheiro(Double thetaDinheiro) {
        this.thetaDinheiro = thetaDinheiro;
    }

    public Double getThetaPercentual() {
        return thetaPercentual;
    }

    public void setThetaPercentual(Double thetaPercentual) {
        this.thetaPercentual = thetaPercentual;
    }

    public Double getVega() {
        return vega;
    }

    public void setVega(Double vega) {
        this.vega = vega;
    }

    public Boolean getIndUltimaCotacao() {
        return indUltimaCotacao;
    }

    public void setIndUltimaCotacao(Boolean indUltimaCotacao) {
        this.indUltimaCotacao = indUltimaCotacao;
    }
}
