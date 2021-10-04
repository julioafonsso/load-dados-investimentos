package com.julioafonsso.investimentos.model.acao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class DadosMedioPorSetor {

    private final static Logger LOGGER = LoggerFactory.getLogger(DadosMedioPorSetor.class);

    @Id
    @GeneratedValue
    private Integer id;

    @Column
    private String setor;

    @Column
    private Boolean indUltimoCalculo;

    @Column
    private LocalDate data;

    @Column(precision = 4, scale = 2)
    private Double valorPatrimonialPorAcao;

    @Column(precision = 4, scale = 2)
    private Double lucroPorAcao;

    @Column(precision = 2, scale = 2)
    private Double oscilacaoDiaria;
    @Column(precision = 2, scale = 2)
    private Double oscilacaoMes;
    @Column(precision = 4, scale = 2)
    private Double oscilacao30Dias;
    @Column(precision = 4, scale = 2)
    private Double oscilacao12Meses;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAno;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAnoD1;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAnoD2;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAnoD3;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAnoD4;
    @Column(precision = 4, scale = 2)
    private Double oscilacaoAnoD5;

    @Column(precision = 4, scale = 2)
    private Double precoPorLucro;
    @Column(precision = 4, scale = 2)
    private Double precoPorValorPatrimonial;
    @Column(precision = 4, scale = 2)
    private Double precoPorEbit;
    @Column(precision = 4, scale = 2)
    private Double psr;
    @Column(precision = 4, scale = 2)
    private Double precoPorAtivo;
    @Column(precision = 4, scale = 2)
    private Double precoPorAtivoCirculante;
    @Column(precision = 4, scale = 2)
    private Double dividendoYield;
    @Column(precision = 4, scale = 2)
    private Double evalutationPorEbitda;
    @Column(precision = 4, scale = 2)
    private Double evalutationPorEbit;
    @Column(precision = 4, scale = 2)
    private Double precoPorCapitalGiro;

    @Column(precision = 4, scale = 2)
    private Double roe;
    @Column(precision = 4, scale = 2)
    private Double roic;
    @Column(precision = 4, scale = 2)
    private Double ebitPorAtivo;
    @Column(precision = 4, scale = 2)
    private Double crescimentoReceita;
    @Column(precision = 4, scale = 2)
    private Double receitaLiquidaPorAtivo;
    @Column(precision = 4, scale = 2)
    private Double margemBruta;
    @Column(precision = 4, scale = 2)
    private Double margemEbit;
    @Column(precision = 4, scale = 2)
    private Double margemLiquida;

    @Column(precision = 4, scale = 2)
    private Double liquidezCorrente;
    @Column(precision = 4, scale = 2)
    private Double dividaBrutaPorPatrimonio;
    @Column(precision = 4, scale = 2)
    private Double dividaLiquidaPorPatrimonio;
    @Column(precision = 4, scale = 2)
    private Double dividaLiquidaPorEbitda;
    @Column(precision = 4, scale = 2)
    private Double patrimonioLiquidoPorATivo;



    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }


    public Double getValorPatrimonialPorAcao() {
        return valorPatrimonialPorAcao;
    }

    public void setValorPatrimonialPorAcao(Double valorPatrimonialPorAcao) {
        this.valorPatrimonialPorAcao = valorPatrimonialPorAcao;
    }

    public Double getLucroPorAcao() {
        return lucroPorAcao;
    }

    public void setLucroPorAcao(Double lucroPorAcao) {
        this.lucroPorAcao = lucroPorAcao;
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

    public Double getPrecoPorLucro() {
        return precoPorLucro;
    }

    public void setPrecoPorLucro(Double precoPorLucro) {
        this.precoPorLucro = precoPorLucro;
    }

    public Double getPrecoPorValorPatrimonial() {
        return precoPorValorPatrimonial;
    }

    public void setPrecoPorValorPatrimonial(Double precoPorValorPatrimonial) {
        this.precoPorValorPatrimonial = precoPorValorPatrimonial;
    }

    public Double getPrecoPorEbit() {
        return precoPorEbit;
    }

    public void setPrecoPorEbit(Double precoPorEbit) {
        this.precoPorEbit = precoPorEbit;
    }

    public Double getPsr() {
        return psr;
    }

    public void setPsr(Double psr) {
        this.psr = psr;
    }

    public Double getPrecoPorAtivo() {
        return precoPorAtivo;
    }

    public void setPrecoPorAtivo(Double precoPorAtivo) {
        this.precoPorAtivo = precoPorAtivo;
    }

    public Double getPrecoPorAtivoCirculante() {
        return precoPorAtivoCirculante;
    }

    public void setPrecoPorAtivoCirculante(Double precoPorAtivoCirculante) {
        this.precoPorAtivoCirculante = precoPorAtivoCirculante;
    }

    public Double getDividendoYield() {
        return dividendoYield;
    }

    public void setDividendoYield(Double dividendoYield) {
        this.dividendoYield = dividendoYield;
    }

    public Double getEvalutationPorEbitda() {
        return evalutationPorEbitda;
    }

    public void setEvalutationPorEbitda(Double evalutationPorEbitda) {
        this.evalutationPorEbitda = evalutationPorEbitda;
    }

    public Double getEvalutationPorEbit() {
        return evalutationPorEbit;
    }

    public void setEvalutationPorEbit(Double evalutationPorEbit) {
        this.evalutationPorEbit = evalutationPorEbit;
    }

    public Double getPrecoPorCapitalGiro() {
        return precoPorCapitalGiro;
    }

    public void setPrecoPorCapitalGiro(Double precoPorCapitalGiro) {
        this.precoPorCapitalGiro = precoPorCapitalGiro;
    }

    public Double getRoe() {
        return roe;
    }

    public void setRoe(Double roe) {
        this.roe = roe;
    }

    public Double getRoic() {
        return roic;
    }

    public void setRoic(Double roic) {
        this.roic = roic;
    }

    public Double getEbitPorAtivo() {
        return ebitPorAtivo;
    }

    public void setEbitPorAtivo(Double ebitPorAtivo) {
        this.ebitPorAtivo = ebitPorAtivo;
    }

    public Double getCrescimentoReceita() {
        return crescimentoReceita;
    }

    public void setCrescimentoReceita(Double crescimentoReceita) {
        this.crescimentoReceita = crescimentoReceita;
    }

    public Double getReceitaLiquidaPorAtivo() {
        return receitaLiquidaPorAtivo;
    }

    public void setReceitaLiquidaPorAtivo(Double receitaLiquidaPorAtivo) {
        this.receitaLiquidaPorAtivo = receitaLiquidaPorAtivo;
    }

    public Double getMargemBruta() {
        return margemBruta;
    }

    public void setMargemBruta(Double margemBruta) {
        this.margemBruta = margemBruta;
    }

    public Double getMargemEbit() {
        return margemEbit;
    }

    public void setMargemEbit(Double margemEbit) {
        this.margemEbit = margemEbit;
    }

    public Double getMargemLiquida() {
        return margemLiquida;
    }

    public void setMargemLiquida(Double margemLiquida) {
        this.margemLiquida = margemLiquida;
    }

    public Double getLiquidezCorrente() {
        return liquidezCorrente;
    }

    public void setLiquidezCorrente(Double liquidezCorrente) {
        this.liquidezCorrente = liquidezCorrente;
    }

    public Double getDividaBrutaPorPatrimonio() {
        return dividaBrutaPorPatrimonio;
    }

    public void setDividaBrutaPorPatrimonio(Double dividaBrutaPorPatrimonio) {
        this.dividaBrutaPorPatrimonio = dividaBrutaPorPatrimonio;
    }

    public Double getDividaLiquidaPorPatrimonio() {
        return dividaLiquidaPorPatrimonio;
    }

    public void setDividaLiquidaPorPatrimonio(Double dividaLiquidaPorPatrimonio) {
        this.dividaLiquidaPorPatrimonio = dividaLiquidaPorPatrimonio;
    }

    public Double getDividaLiquidaPorEbitda() {
        return dividaLiquidaPorEbitda;
    }

    public void setDividaLiquidaPorEbitda(Double dividaLiquidaPorEbitda) {
        this.dividaLiquidaPorEbitda = dividaLiquidaPorEbitda;
    }

    public Double getPatrimonioLiquidoPorATivo() {
        return patrimonioLiquidoPorATivo;
    }

    public void setPatrimonioLiquidoPorATivo(Double patrimonioLiquidoPorATivo) {
        this.patrimonioLiquidoPorATivo = patrimonioLiquidoPorATivo;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Boolean getIndUltimoCalculo() {
        return indUltimoCalculo;
    }

    public void setIndUltimoCalculo(Boolean indUltimoCalculo) {
        this.indUltimoCalculo = indUltimoCalculo;
    }
}
