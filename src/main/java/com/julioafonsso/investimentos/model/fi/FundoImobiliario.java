package com.julioafonsso.investimentos.model.fi;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class FundoImobiliario {

    @Id
    @GeneratedValue
    private Integer id;
    @Column
    private String codigo;
    @Column
    private Boolean indUltimaCotacao;
    @Column
    private LocalDateTime createDate;
    @Column
    private Double valorMercado;
    @Column
    private Double quantidadeCotas;
    @Column
    private LocalDate dataUltimoInforme;
    @Column
    private String mandato;
    @Column
    private String gestao;
    @Column
    private String segmento;

    @Column
    private Double cotacao;
    @Column
    private LocalDate dataCotacao;
    @Column
    private Double cotacaoMinima52Semanas;
    @Column
    private Double cotacaoMaxima52Semanas;
    @Column
    private Double volumeNegociado;
    @Column
    private Double oscilacaoDiaria;
    @Column
    private Double oscilacaoMes;
    @Column
    private Double oscilacao30Dias;
    @Column
    private Double oscilacao12Meses;
    @Column
    private Double oscilacaoAno;
    @Column
    private Double oscilacaoAnoD1;
    @Column
    private Double oscilacaoAnoD2;
    @Column
    private Double oscilacaoAnoD3;
    @Column
    private Double oscilacaoAnoD4;
    @Column
    private Double oscilacaoAnoD5;

    @Column
    private Double ativos;
    @Column
    private Double patrimonioLiquido;
    @Column
    private Double fundsFromOperationYield;
    @Column
    private Double fundFromOperationPorCota;
    @Column
    private Double dividendoYield;
    @Column
    private Double dividendoPorCota;
    @Column
    private Double precoPorValorPatrimonial;
    @Column
    private Double valorPatrimonialPorCota;

    @Column
    private Double quantidadeImoveis;
    @Column
    private Double vacanciaMedia;
    @Column
    private Double quantidadeUnidades;
    @Column
    private Double areaMetroQuadrado;
    @Column
    private Double percentagemImoveisFisicos;
    @Column
    private Double valorAnualAluguelMetroQuadrado;
    @Column
    private Double capRate;
    @Column
    private Double precoM2;
    @Column
    private Double receita12Meses;
    @Column
    private Double receita3Meses;
    @Column
    private Double vendaAtivo12meses;
    @Column
    private Double vendaAtivo3meses;
    @Column
    private Double fundFromOperation12meses;
    @Column
    private Double fundFromOperation3meses;
    @Column
    private Double rendimentoDistribuido12meses;
    @Column
    private Double rendimentoDistribuido3meses;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Boolean getIndUltimaCotacao() {
        return indUltimaCotacao;
    }

    public void setIndUltimaCotacao(Boolean indUltimaCotacao) {
        this.indUltimaCotacao = indUltimaCotacao;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public Double getValorMercado() {
        return valorMercado;
    }

    public void setValorMercado(Double valorMercado) {
        this.valorMercado = valorMercado;
    }

    public Double getQuantidadeCotas() {
        return quantidadeCotas;
    }

    public void setQuantidadeCotas(Double quantidadeCotas) {
        this.quantidadeCotas = quantidadeCotas;
    }

    public LocalDate getDataUltimoInforme() {
        return dataUltimoInforme;
    }

    public void setDataUltimoInforme(LocalDate dataUltimoInforme) {
        this.dataUltimoInforme = dataUltimoInforme;
    }

    public String getMandato() {
        return mandato;
    }

    public void setMandato(String mandato) {
        this.mandato = mandato;
    }

    public String getGestao() {
        return gestao;
    }

    public void setGestao(String gestao) {
        this.gestao = gestao;
    }

    public String getSegmento() {
        return segmento;
    }

    public void setSegmento(String segmento) {
        this.segmento = segmento;
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

    public Double getCotacaoMinima52Semanas() {
        return cotacaoMinima52Semanas;
    }

    public void setCotacaoMinima52Semanas(Double cotacaoMinima52Semanas) {
        this.cotacaoMinima52Semanas = cotacaoMinima52Semanas;
    }

    public Double getCotacaoMaxima52Semanas() {
        return cotacaoMaxima52Semanas;
    }

    public void setCotacaoMaxima52Semanas(Double cotacaoMaxima52Semanas) {
        this.cotacaoMaxima52Semanas = cotacaoMaxima52Semanas;
    }

    public Double getVolumeNegociado() {
        return volumeNegociado;
    }

    public void setVolumeNegociado(Double volumeNegociado) {
        this.volumeNegociado = volumeNegociado;
    }

    public Double getOscilacaoDiaria() {
        return oscilacaoDiaria;
    }

    public void setOscilacaoDiaria(Double oscilacaoDiaria) {
        this.oscilacaoDiaria = oscilacaoDiaria;
    }

    public Double getOscilacaoMes() {
        return oscilacaoMes;
    }

    public void setOscilacaoMes(Double oscilacaoMes) {
        this.oscilacaoMes = oscilacaoMes;
    }

    public Double getOscilacao30Dias() {
        return oscilacao30Dias;
    }

    public void setOscilacao30Dias(Double oscilacao30Dias) {
        this.oscilacao30Dias = oscilacao30Dias;
    }

    public Double getOscilacao12Meses() {
        return oscilacao12Meses;
    }

    public void setOscilacao12Meses(Double oscilacao12Meses) {
        this.oscilacao12Meses = oscilacao12Meses;
    }

    public Double getOscilacaoAno() {
        return oscilacaoAno;
    }

    public void setOscilacaoAno(Double oscilacaoAno) {
        this.oscilacaoAno = oscilacaoAno;
    }

    public Double getOscilacaoAnoD1() {
        return oscilacaoAnoD1;
    }

    public void setOscilacaoAnoD1(Double oscilacaoAnoD1) {
        this.oscilacaoAnoD1 = oscilacaoAnoD1;
    }

    public Double getOscilacaoAnoD2() {
        return oscilacaoAnoD2;
    }

    public void setOscilacaoAnoD2(Double oscilacaoAnoD2) {
        this.oscilacaoAnoD2 = oscilacaoAnoD2;
    }

    public Double getOscilacaoAnoD3() {
        return oscilacaoAnoD3;
    }

    public void setOscilacaoAnoD3(Double oscilacaoAnoD3) {
        this.oscilacaoAnoD3 = oscilacaoAnoD3;
    }

    public Double getOscilacaoAnoD4() {
        return oscilacaoAnoD4;
    }

    public void setOscilacaoAnoD4(Double oscilacaoAnoD4) {
        this.oscilacaoAnoD4 = oscilacaoAnoD4;
    }

    public Double getOscilacaoAnoD5() {
        return oscilacaoAnoD5;
    }

    public void setOscilacaoAnoD5(Double oscilacaoAnoD5) {
        this.oscilacaoAnoD5 = oscilacaoAnoD5;
    }

    public Double getAtivos() {
        return ativos;
    }

    public void setAtivos(Double ativos) {
        this.ativos = ativos;
    }

    public Double getPatrimonioLiquido() {
        return patrimonioLiquido;
    }

    public void setPatrimonioLiquido(Double patrimonioLiquido) {
        this.patrimonioLiquido = patrimonioLiquido;
    }

    public Double getFundsFromOperationYield() {
        return fundsFromOperationYield;
    }

    public void setFundsFromOperationYield(Double fundsFromOperationYield) {
        this.fundsFromOperationYield = fundsFromOperationYield;
    }

    public Double getFundFromOperationPorCota() {
        return fundFromOperationPorCota;
    }

    public void setFundFromOperationPorCota(Double fundFromOperationPorCota) {
        this.fundFromOperationPorCota = fundFromOperationPorCota;
    }

    public Double getDividendoYield() {
        return dividendoYield;
    }

    public void setDividendoYield(Double dividendoYield) {
        this.dividendoYield = dividendoYield;
    }

    public Double getDividendoPorCota() {
        return dividendoPorCota;
    }

    public void setDividendoPorCota(Double dividendoPorCota) {
        this.dividendoPorCota = dividendoPorCota;
    }

    public Double getPrecoPorValorPatrimonial() {
        return precoPorValorPatrimonial;
    }

    public void setPrecoPorValorPatrimonial(Double precoPorValorPatrimonial) {
        this.precoPorValorPatrimonial = precoPorValorPatrimonial;
    }

    public Double getValorPatrimonialPorCota() {
        return valorPatrimonialPorCota;
    }

    public void setValorPatrimonialPorCota(Double valorPatrimonialPorCota) {
        this.valorPatrimonialPorCota = valorPatrimonialPorCota;
    }

    public Double getQuantidadeImoveis() {
        return quantidadeImoveis;
    }

    public void setQuantidadeImoveis(Double quantidadeImoveis) {
        this.quantidadeImoveis = quantidadeImoveis;
    }

    public Double getVacanciaMedia() {
        return vacanciaMedia;
    }

    public void setVacanciaMedia(Double vacanciaMedia) {
        this.vacanciaMedia = vacanciaMedia;
    }

    public Double getQuantidadeUnidades() {
        return quantidadeUnidades;
    }

    public void setQuantidadeUnidades(Double quantidadeUnidades) {
        this.quantidadeUnidades = quantidadeUnidades;
    }

    public Double getAreaMetroQuadrado() {
        return areaMetroQuadrado;
    }

    public void setAreaMetroQuadrado(Double areaMetroQuadrado) {
        this.areaMetroQuadrado = areaMetroQuadrado;
    }

    public Double getPercentagemImoveisFisicos() {
        return percentagemImoveisFisicos;
    }

    public void setPercentagemImoveisFisicos(Double percentagemImoveisFisicos) {
        this.percentagemImoveisFisicos = percentagemImoveisFisicos;
    }

    public Double getValorAnualAluguelMetroQuadrado() {
        return valorAnualAluguelMetroQuadrado;
    }

    public void setValorAnualAluguelMetroQuadrado(Double valorAnualAluguelMetroQuadrado) {
        this.valorAnualAluguelMetroQuadrado = valorAnualAluguelMetroQuadrado;
    }

    public Double getCapRate() {
        return capRate;
    }

    public void setCapRate(Double capRate) {
        this.capRate = capRate;
    }

    public Double getPrecoM2() {
        return precoM2;
    }

    public void setPrecoM2(Double precoM2) {
        this.precoM2 = precoM2;
    }

    public Double getReceita12Meses() {
        return receita12Meses;
    }

    public void setReceita12Meses(Double receita12Meses) {
        this.receita12Meses = receita12Meses;
    }

    public Double getReceita3Meses() {
        return receita3Meses;
    }

    public void setReceita3Meses(Double receita3Meses) {
        this.receita3Meses = receita3Meses;
    }

    public Double getVendaAtivo12meses() {
        return vendaAtivo12meses;
    }

    public void setVendaAtivo12meses(Double vendaAtivo12meses) {
        this.vendaAtivo12meses = vendaAtivo12meses;
    }

    public Double getVendaAtivo3meses() {
        return vendaAtivo3meses;
    }

    public void setVendaAtivo3meses(Double vendaAtivo3meses) {
        this.vendaAtivo3meses = vendaAtivo3meses;
    }

    public Double getFundFromOperation12meses() {
        return fundFromOperation12meses;
    }

    public void setFundFromOperation12meses(Double fundFromOperation12meses) {
        this.fundFromOperation12meses = fundFromOperation12meses;
    }

    public Double getFundFromOperation3meses() {
        return fundFromOperation3meses;
    }

    public void setFundFromOperation3meses(Double fundFromOperation3meses) {
        this.fundFromOperation3meses = fundFromOperation3meses;
    }

    public Double getRendimentoDistribuido12meses() {
        return rendimentoDistribuido12meses;
    }

    public void setRendimentoDistribuido12meses(Double rendimentoDistribuido12meses) {
        this.rendimentoDistribuido12meses = rendimentoDistribuido12meses;
    }

    public Double getRendimentoDistribuido3meses() {
        return rendimentoDistribuido3meses;
    }

    public void setRendimentoDistribuido3meses(Double rendimentoDistribuido3meses) {
        this.rendimentoDistribuido3meses = rendimentoDistribuido3meses;
    }

    public boolean isDataCotacaoOldThen3Months(){
        LocalDate localDateTime = LocalDate.now();
        localDateTime = localDateTime.plusDays(-90);
        return localDateTime.compareTo(this.getDataCotacao()) > 0;
    }
}
