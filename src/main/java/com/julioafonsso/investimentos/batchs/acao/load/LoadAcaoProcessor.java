package com.julioafonsso.investimentos.batchs.acao.load;

import com.julioafonsso.investimentos.model.LogErrorRepository;
import com.julioafonsso.investimentos.model.acao.Acao;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class LoadAcaoProcessor implements ItemProcessor<String, Acao> {

    public static final DateTimeFormatter sdf = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Autowired
    private LogErrorRepository logErrorRepository;

    public Acao process(String codigoAcao) {
        Acao acao = new Acao();
        acao.setCodigo(codigoAcao);
        acao.setCreateDate(LocalDateTime.now());
        acao.setIndUltimaCotacao(Boolean.TRUE);

        try {
            Document doc = Jsoup
                    .connect("https://fundamentus.com.br/detalhes.php?papel=" + codigoAcao + "&interface=mobile")
                    .get();
            preencherCotacao(acao, doc);
            if (acao.isDataCotacaoOldThen3Months())
                return acao;

            preencherInfoBase(acao, doc);
            preencherOscilacoes(acao, doc);
            preencherIndicadorValuation(acao, doc);
            preencherIndicadorRendabilidade(acao, doc);
            preencherIndicadorEndividamento(acao, doc);
            preencherBalancoPatrimonial(acao, doc);
            preencherDemonstrativoResultado(acao, doc);
            return acao;
        } catch (Exception e) {
            this.logErrorRepository.save(
                    acao, e
            );
            return null;
        }

    }

    private void preencherOscilacoes(Acao acao, Document doc) {
        Element divOscilacoes = doc.getElementsByClass("oscilacoes").get(0);
        acao.setOscilacaoDiaria(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "dia")));
        acao.setOscilacaoMes(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "mês")));
        acao.setOscilacao30Dias(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "30 dias")));
        acao.setOscilacao12Meses(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "12 meses")));
        acao.setOscilacaoAno(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2021")));
        acao.setOscilacaoAnoD1(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2020")));
        acao.setOscilacaoAnoD2(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2019")));
        acao.setOscilacaoAnoD3(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2018")));
        acao.setOscilacaoAnoD4(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2017")));
        acao.setOscilacaoAnoD5(convertoToDouble(getInfoByLabelDataText(divOscilacoes, "2016")));
    }

    private void preencherInfoBase(Acao acao, Document doc) {
        acao.setValorMercado(convertoToDouble(getInfoByLabelDataTitle(doc, "Valor de mercado")));
        acao.setValorFirma(convertoToDouble(getInfoByLabelDataTitle(doc, "Valor da firma")));
        acao.setNumeroAcoes(convertoToDouble(getInfoByLabelDataTitle(doc, "Nº de ações")).longValue());

        acao.setDataUltimoBalanco(convertToDate(getInfoByLabelDataTitle(doc, "Último balanço")));

        acao.setSetor(getInfoByLabelDataTitle(doc, "Setor"));
        acao.setSubSetor(getInfoByLabelDataTitle(doc, "Subsetor"));

        acao.setTipo(getInfoByLabelDataTitle(doc, "Tipo"));
        acao.setVolumeNegociado(convertoToDouble(getInfoByLabelDataTitle(doc, "Volume negociado por dia")));
        acao.setCotacaoMinima52Semanas(convertoToDouble(getInfoByLabelDataText(doc, "mínimo")));
        acao.setCotacaoMaxima52Semanas(convertoToDouble(getInfoByLabelDataText(doc, "máximo")));
        acao.setValorPatrimonialPorAcao(convertoToDouble(getInfoByLabelDataTitle(doc, "VPA")));
        acao.setLucroPorAcao(convertoToDouble(getInfoByLabelDataTitle(doc, "LPA")));

    }

    private void preencherCotacao(Acao acao, Document doc) {
        acao.setCotacao(convertoToDouble(getInfoByLabelDataTitle(doc, "Cotação")));
        acao.setDataCotacao(convertToDate(getInfoByLabelDataTitle(doc, "Última cotação")));

    }

    private void preencherIndicadorValuation(Acao acao, Document doc) {
        acao.setPrecoPorLucro(convertoToDouble(getInfoByLabelDataTitle(doc, "P/L")));
        acao.setPrecoPorValorPatrimonial(convertoToDouble(getInfoByLabelDataTitle(doc, "P/VP")));
        acao.setPrecoPorEbit(convertoToDouble(getInfoByLabelDataTitle(doc, "P/EBIT")));
        acao.setPsr(convertoToDouble(getInfoByLabelDataTitle(doc, "PSR")));
        acao.setPsr(convertoToDouble(getInfoByLabelDataTitle(doc, "PSR")));
        acao.setPrecoPorAtivo(convertoToDouble(getInfoByLabelDataTitle(doc, "Preço/Ativos")));
        acao.setPrecoPorAtivoCirculante(convertoToDouble(getInfoByLabelDataTitle(doc, "Preço/Ativ circ liq")));
        acao.setDividendoYield(convertoToDouble(getInfoByLabelDataTitle(doc, "Dividend Yield")));
        acao.setEvalutationPorEbitda(convertoToDouble(getInfoByLabelDataTitle(doc, "EV/EBITDA")));
        acao.setEvalutationPorEbit(convertoToDouble(getInfoByLabelDataTitle(doc, "EV/EBIT")));
        acao.setPrecoPorCapitalGiro(convertoToDouble(getInfoByLabelDataTitle(doc, "Preço/Capital de giro")));
    }

    private void preencherIndicadorRendabilidade(Acao acao, Document doc) {
        acao.setRoe(convertoToDouble(getInfoByLabelDataTitle(doc, "ROE")));
        acao.setRoic(convertoToDouble(getInfoByLabelDataTitle(doc, "ROIC")));
        acao.setEbitPorAtivo(convertoToDouble(getInfoByLabelDataTitle(doc, "EBIT/Ativo")));
        acao.setCrescimentoReceita(convertoToDouble(getInfoByLabelDataTitle(doc, "Crescimento receita")));
        acao.setReceitaLiquidaPorAtivo(convertoToDouble(getInfoByLabelDataTitle(doc, "Giro ativos")));
        acao.setMargemBruta(convertoToDouble(getInfoByLabelDataTitle(doc, "Margem bruta")));
        acao.setMargemEbit(convertoToDouble(getInfoByLabelDataTitle(doc, "Margem EBIT")));
        acao.setMargemLiquida(convertoToDouble(getInfoByLabelDataTitle(doc, "Margem líquida")));
    }

    private void preencherIndicadorEndividamento(Acao acao, Document doc) {
        acao.setLiquidezCorrente(convertoToDouble(getInfoByLabelDataTitle(doc, "Liquidez corrente")));
        acao.setDividaBrutaPorPatrimonio(convertoToDouble(getInfoByLabelDataTitle(doc, "Dívida bruta/Patrim")));
        acao.setDividaLiquidaPorPatrimonio(convertoToDouble(getInfoByLabelDataTitle(doc, "Dívida líquida/Patrim")));
        acao.setDividaLiquidaPorEbitda(convertoToDouble(getInfoByLabelDataTitle(doc, "Dívida líquida/EBITDA")));
        acao.setPatrimonioLiquidoPorATivo(convertoToDouble(getInfoByLabelDataTitle(doc, "PL/Ativos")));
    }

    private void preencherBalancoPatrimonial(Acao acao, Document doc) {
        acao.setAtivo(convertoToDouble(getInfoByLabelDataTitle(doc, "Ativo")));
        acao.setAtivoCirculante(convertoToDouble(getInfoByLabelDataTitle(doc, "Ativo circulante")));
        acao.setDisponibilidade(convertoToDouble(getInfoByLabelDataTitle(doc, "Disponibilidades")));
        acao.setDividaBruta(convertoToDouble(getInfoByLabelDataTitle(doc, "Dívida bruta")));
        acao.setDividaLiquida(convertoToDouble(getInfoByLabelDataTitle(doc, "Dívida líquida")));
        acao.setPatrimonioLiquido(convertoToDouble(getInfoByLabelDataTitle(doc, "Patrimônio líquido")));
    }

    private void preencherDemonstrativoResultado(Acao acao, Document doc) {
        Element tabela = doc.getElementsByClass("table-demonstrativo-resultados").get(0);
        Elements linhas = tabela.getElementsByTag("tbody").get(0).getElementsByTag("tr");

        acao.setReceitaLiquida12Meses(convertoToDouble(linhas.get(0).getElementsByTag("td").get(0).text()));
        acao.setReceitaLiquida3Meses(convertoToDouble(linhas.get(0).getElementsByTag("td").get(1).text()));

        acao.setEbit12Meses(convertoToDouble(linhas.get(1).getElementsByTag("td").get(0).text()));
        acao.setEbit3Meses(convertoToDouble(linhas.get(1).getElementsByTag("td").get(1).text()));

        acao.setLucroLiquido12Meses(convertoToDouble(linhas.get(2).getElementsByTag("td").get(0).text()));
        acao.setLucroLiquido3Meses(convertoToDouble(linhas.get(2).getElementsByTag("td").get(1).text()));
    }

    private Double convertoToDouble(String valor) {
        try {
            return Double.parseDouble(
                    valor.replace(".", "")
                            .replace(",", ".")
                            .replace("%", "")
                            .replace("R$", "")
                            .trim()
            );
        } catch (Exception e) {
            return null;
        }
    }

    private String getInfoByLabelDataTitle(Element doc, String label) {

        try {
            return doc.getElementsByClass("data-title")
                    .stream()
                    .filter(element -> element.text().startsWith(label))
                    .findFirst()
                    .get()
                    .parent()
                    .child(1)
                    .text()
                    .trim();
        } catch (Exception e) {
            return "";
        }

    }

    private String getInfoByLabelDataText(Element doc, String label) {
        try {

            return doc.getElementsByClass("data-text")
                    .stream()
                    .filter(element -> element.text().startsWith(label))
                    .findFirst()
                    .get()
                    .parent()
                    .child(0)
                    .text()
                    .trim();

        } catch (Exception e) {
            return "";
        }
    }



    private LocalDate convertToDate(String valor) {
        if (valor == null || valor.length() != 10)
            return null;
        return LocalDate.parse(valor, sdf);

    }
}
