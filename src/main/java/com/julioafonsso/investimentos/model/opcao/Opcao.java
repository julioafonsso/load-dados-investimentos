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
    private String codigoAcao;

    @Column
    private String tipo;

    @Column
    private Double valorStrike;

    @Column
    private LocalDate dataVencimento;

    @Column
    private boolean indFormadorMercado;

    @Column
    private String modelo;

    @Column
    private Double valorUltimaCotacao;

    @Column
    private LocalDate dataUltimaCotacao;

    @Column
    private Integer numeroNegociacao;

    @Column
    private Double volume;

    @Column
    private Double volatilidade;

    @Column
    private Double delta;

    @Column
    private Double gamma;

    @Column
    private Double thetaDinheiro;

    @Column
    private Double thetaPercentual;

    @Column
    private Double vega;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getValorUltimaCotacao() {
        return valorUltimaCotacao;
    }

    public void setValorUltimaCotacao(Double valorUltimaCotacao) {
        this.valorUltimaCotacao = valorUltimaCotacao;
    }

    public LocalDate getDataUltimaCotacao() {
        return dataUltimaCotacao;
    }

    public void setDataUltimaCotacao(LocalDate dataUltimaCotacao) {
        this.dataUltimaCotacao = dataUltimaCotacao;
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
}
