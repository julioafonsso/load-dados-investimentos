package com.julioafonsso.investimentos.batchs.acao.processamento.media;

import com.julioafonsso.investimentos.model.acao.AcaoRepository;
import com.julioafonsso.investimentos.model.acao.DadosMedioPorSetor;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class CalculoMediasAcaoPorSetorProcessor implements ItemProcessor<String, DadosMedioPorSetor> {

    @Autowired
    AcaoRepository acaoRepository;

    @Override
    public DadosMedioPorSetor process(String setor) {

        DadosMedioPorSetor dados = new DadosMedioPorSetor();
        dados.setSetor(setor);
        dados.setData(LocalDate.now());
        dados.setIndUltimoCalculo(true);

        AtomicInteger index = new AtomicInteger();
        this.acaoRepository
                .findBySetorAndIndUltimaCotacao(setor, true)
                .forEach(acao -> {
                    index.getAndIncrement();
                    dados.setValorPatrimonialPorAcao(calculaMedia(dados.getValorPatrimonialPorAcao(), acao.getValorPatrimonialPorAcao(), index.get()));
                    dados.setLucroPorAcao(calculaMedia(dados.getLucroPorAcao(), acao.getLucroPorAcao(), index.get()));
                    dados.setOscilacaoDiaria(calculaMedia(dados.getOscilacaoDiaria(), acao.getOscilacaoDiaria(), index.get()));
                    dados.setOscilacaoMes(calculaMedia(dados.getOscilacaoMes(), acao.getOscilacaoMes(), index.get()));
                    dados.setOscilacao30Dias(calculaMedia(dados.getOscilacao30Dias(), acao.getOscilacao30Dias(), index.get()));
                    dados.setOscilacao12Meses(calculaMedia(dados.getOscilacao12Meses(), acao.getOscilacao12Meses(), index.get()));
                    dados.setOscilacaoAno(calculaMedia(dados.getOscilacaoAno(), acao.getOscilacaoAno(), index.get()));
                    dados.setOscilacaoAnoD1(calculaMedia(dados.getOscilacaoAnoD1(), acao.getOscilacaoAnoD1(), index.get()));
                    dados.setOscilacaoAnoD2(calculaMedia(dados.getOscilacaoAnoD2(), acao.getOscilacaoAnoD2(), index.get()));
                    dados.setOscilacaoAnoD3(calculaMedia(dados.getOscilacaoAnoD3(), acao.getOscilacaoAnoD3(), index.get()));
                    dados.setOscilacaoAnoD4(calculaMedia(dados.getOscilacaoAnoD4(), acao.getOscilacaoAnoD4(), index.get()));
                    dados.setOscilacaoAnoD5(calculaMedia(dados.getOscilacaoAnoD5(), acao.getOscilacaoAnoD5(), index.get()));
                    dados.setPrecoPorLucro(calculaMedia(dados.getPrecoPorLucro(), acao.getPrecoPorLucro(), index.get()));
                    dados.setPrecoPorValorPatrimonial(calculaMedia(dados.getPrecoPorValorPatrimonial(), acao.getPrecoPorValorPatrimonial(), index.get()));
                    dados.setPrecoPorEbit(calculaMedia(dados.getPrecoPorEbit(), acao.getPrecoPorEbit(), index.get()));
                    dados.setPsr(calculaMedia(dados.getPsr(), acao.getPsr(), index.get()));
                    dados.setPrecoPorAtivo(calculaMedia(dados.getPrecoPorAtivo(), acao.getPrecoPorAtivo(), index.get()));
                    dados.setPrecoPorAtivoCirculante(calculaMedia(dados.getPrecoPorAtivoCirculante(), acao.getPrecoPorAtivoCirculante(), index.get()));
                    dados.setDividendoYield(calculaMedia(dados.getDividendoYield(), acao.getDividendoYield(), index.get()));
                    dados.setEvalutationPorEbitda(calculaMedia(dados.getEvalutationPorEbitda(), acao.getEvalutationPorEbitda(), index.get()));
                    dados.setEvalutationPorEbit(calculaMedia(dados.getEvalutationPorEbit(), acao.getEvalutationPorEbit(), index.get()));
                    dados.setPrecoPorCapitalGiro(calculaMedia(dados.getPrecoPorCapitalGiro(), acao.getPrecoPorCapitalGiro(), index.get()));
                    dados.setRoe(calculaMedia(dados.getRoe(), acao.getRoe(), index.get()));
                    dados.setRoic(calculaMedia(dados.getRoic(), acao.getRoic(), index.get()));
                    dados.setEbitPorAtivo(calculaMedia(dados.getEbitPorAtivo(), acao.getEbitPorAtivo(), index.get()));
                    dados.setCrescimentoReceita(calculaMedia(dados.getCrescimentoReceita(), acao.getCrescimentoReceita(), index.get()));
                    dados.setReceitaLiquidaPorAtivo(calculaMedia(dados.getReceitaLiquidaPorAtivo(), acao.getReceitaLiquidaPorAtivo(), index.get()));
                    dados.setMargemBruta(calculaMedia(dados.getMargemBruta(), acao.getMargemBruta(), index.get()));
                    dados.setMargemEbit(calculaMedia(dados.getMargemEbit(), acao.getMargemEbit(), index.get()));
                    dados.setMargemLiquida(calculaMedia(dados.getMargemLiquida(), acao.getMargemLiquida(), index.get()));
                    dados.setLiquidezCorrente(calculaMedia(dados.getLiquidezCorrente(), acao.getLiquidezCorrente(), index.get()));
                    dados.setDividaBrutaPorPatrimonio(calculaMedia(dados.getDividaBrutaPorPatrimonio(), acao.getDividaBrutaPorPatrimonio(), index.get()));
                    dados.setDividaLiquidaPorPatrimonio(calculaMedia(dados.getDividaLiquidaPorPatrimonio(), acao.getDividaLiquidaPorPatrimonio(), index.get()));
                    dados.setDividaLiquidaPorEbitda(calculaMedia(dados.getDividaLiquidaPorEbitda(), acao.getDividaLiquidaPorEbitda(), index.get()));
                    dados.setPatrimonioLiquidoPorATivo(calculaMedia(dados.getPatrimonioLiquidoPorATivo(), acao.getPatrimonioLiquidoPorATivo(), index.get()));
                });

        return dados;
    }

    private Double calculaMedia(Double mediaAtual, Double valor, int index) {
        if (mediaAtual == null)
            mediaAtual = (double) 0;

        if (valor == null)
            return mediaAtual;

        return ((mediaAtual * index) + valor) / index;

    }
}
