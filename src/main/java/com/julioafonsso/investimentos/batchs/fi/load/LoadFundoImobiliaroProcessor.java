package com.julioafonsso.investimentos.batchs.fi.load;

import com.julioafonsso.investimentos.model.LogErrorRepository;
import com.julioafonsso.investimentos.model.fi.FundoImobiliario;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class LoadFundoImobiliaroProcessor implements ItemProcessor<String, FundoImobiliario> {

    @Autowired
    LogErrorRepository logErrorRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(LoadFundoImobiliaroProcessor.class);

    public static final DateTimeFormatter sdf = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public FundoImobiliario process(String codigoFundo) {
        FundoImobiliario fundo = new FundoImobiliario();
        fundo.setCodigo(codigoFundo);
        fundo.setCreateDate(LocalDateTime.now());
        fundo.setIndUltimaCotacao(Boolean.TRUE);

        try {
            Document doc = Jsoup
                    .connect("https://fundamentus.com.br/detalhes.php?papel=" + codigoFundo + "&interface=mobile")
                    .get();

            preencherCotacao(fundo, doc);
            if (fundo.isDataCotacaoOldThen3Months())
                return fundo;

            preencherInfoBase(fundo, doc);
            preencherOscilacoes(fundo, doc);
            preencherBalancoPatrimonial(fundo, doc);
            preencherIndicadorValuation(fundo, doc);
            preencherDadosImoveis(fundo, doc);
            preencherDemonstrativoResultado(fundo, doc);
            return  fundo;
        } catch (Exception e) {
            this.logErrorRepository.save(fundo, e);
            return null;
        }
    }

    private void preencherOscilacoes(FundoImobiliario fundo, Document doc) {
        fundo.setVolumeNegociado(convertToDouble(getInfoByLabelDataTitle(doc, "Volume negociado por dia")));
        fundo.setCotacaoMinima52Semanas(convertToDouble(getInfoByLabelDataText(doc, "mínimo")));
        fundo.setCotacaoMaxima52Semanas(convertToDouble(getInfoByLabelDataText(doc, "máximo")));

        Element divOscilacoes = doc.getElementsByClass("oscilacoes").get(0);
        fundo.setOscilacaoDiaria(convertToDouble(getInfoByLabelDataText(divOscilacoes, "dia")));
        fundo.setOscilacaoMes(convertToDouble(getInfoByLabelDataText(divOscilacoes, "mês")));
        fundo.setOscilacao30Dias(convertToDouble(getInfoByLabelDataText(divOscilacoes, "30 dias")));
        fundo.setOscilacao12Meses(convertToDouble(getInfoByLabelDataText(divOscilacoes, "12 meses")));
        fundo.setOscilacaoAno(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2021")));
        fundo.setOscilacaoAnoD1(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2020")));
        fundo.setOscilacaoAnoD2(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2019")));
        fundo.setOscilacaoAnoD3(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2018")));
        fundo.setOscilacaoAnoD4(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2017")));
        fundo.setOscilacaoAnoD5(convertToDouble(getInfoByLabelDataText(divOscilacoes, "2016")));
    }

    private void preencherInfoBase(FundoImobiliario fundo, Document doc) {
        fundo.setValorMercado(convertToDouble(getInfoByLabelDataTitle(doc, "Valor de mercado")));
        fundo.setQuantidadeCotas(convertToDouble(getInfoByLabelDataTitle(doc, "Nº de cotas")));

        fundo.setDataUltimoInforme(convertToDate(getInfoByLabelDataTitle(doc, "Último informe trimestral")));

        fundo.setMandato(getInfoByLabelDataTitle(doc, "Mandato"));
        fundo.setGestao(getInfoByLabelDataTitle(doc, "Gestão"));
        fundo.setSegmento(getInfoByLabelDataTitle(doc, "Segmento"));

    }

    private void preencherCotacao(FundoImobiliario fundo, Document doc) {
        fundo.setCotacao(convertToDouble(getInfoByLabelDataTitle(doc, "Cotação")));
        fundo.setDataCotacao(convertToDate(getInfoByLabelDataTitle(doc, "Última cotação")));
    }

    private void preencherIndicadorValuation(FundoImobiliario fundo, Document doc) {
        fundo.setFundsFromOperationYield(convertToDouble(getInfoByLabelDataTitle(doc, "FFO Yield")));
        fundo.setDividendoYield(convertToDouble(getInfoByLabelDataTitle(doc, "Dividend Yield")));
        fundo.setPrecoPorValorPatrimonial(convertToDouble(getInfoByLabelDataTitle(doc, "P/VP")));

        fundo.setFundFromOperationPorCota(convertToDouble(getInfoByLabelDataTitle(doc, "FFO/Cota")));
        fundo.setDividendoPorCota(convertToDouble(getInfoByLabelDataTitle(doc, "Dividendo/cota")));
        fundo.setValorPatrimonialPorCota(convertToDouble(getInfoByLabelDataTitle(doc, "VP/Cota")));
    }


    private void preencherBalancoPatrimonial(FundoImobiliario fundo, Document doc) {
        fundo.setAtivos(convertToDouble(getInfoByLabelDataTitle(doc, "Ativos")));
        fundo.setPatrimonioLiquido(convertToDouble(getInfoByLabelDataTitle(doc, "Patrimônio líquido")));
    }

    private void preencherDadosImoveis(FundoImobiliario fundo, Document doc) {
        fundo.setQuantidadeImoveis(convertToDouble(getInfoByLabelDataTitle(doc, "Quantidade de imóveis")));
        fundo.setQuantidadeUnidades(convertToDouble(getInfoByLabelDataTitle(doc, "Quantidade de unidades")));
        fundo.setPercentagemImoveisFisicos(convertToDouble(getInfoByLabelDataTitle(doc, "Imóveis/PL do FII")));
        fundo.setCapRate(convertToDouble(getInfoByLabelDataTitle(doc, "Cap Rate")));
        fundo.setVacanciaMedia(convertToDouble(getInfoByLabelDataTitle(doc, "Vacância Média")));
        fundo.setAreaMetroQuadrado(convertToDouble(getInfoByLabelDataTitle(doc, "Área ")));
        fundo.setValorAnualAluguelMetroQuadrado(convertToDouble(getInfoByLabelDataTitle(doc, "Aluguel/m²")));
        fundo.setPrecoM2(convertToDouble(getInfoByLabelDataTitle(doc, "Preço do m²")));

    }
    private void preencherDemonstrativoResultado(FundoImobiliario fundo, Document doc) {
        Element tabela = doc.getElementsByClass("table-demonstrativo-resultados").get(0);
        Elements linhas = tabela.getElementsByTag("tbody").get(0).getElementsByTag("tr");

        fundo.setReceita12Meses(convertToDouble(linhas.get(0).getElementsByTag("td").get(0).text()));
        fundo.setReceita3Meses(convertToDouble(linhas.get(0).getElementsByTag("td").get(1).text()));

        fundo.setVendaAtivo12meses(convertToDouble(linhas.get(1).getElementsByTag("td").get(0).text()));
        fundo.setVendaAtivo3meses(convertToDouble(linhas.get(1).getElementsByTag("td").get(1).text()));

        fundo.setFundFromOperation12meses(convertToDouble(linhas.get(2).getElementsByTag("td").get(0).text()));
        fundo.setFundFromOperation3meses(convertToDouble(linhas.get(2).getElementsByTag("td").get(1).text()));

        fundo.setRendimentoDistribuido12meses(convertToDouble(linhas.get(3).getElementsByTag("td").get(0).text()));
        fundo.setRendimentoDistribuido3meses(convertToDouble(linhas.get(3).getElementsByTag("td").get(1).text()));
    }

    private Double convertToDouble(String valor) {
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

        }catch (Exception e){
            return "";
        }
    }

    private LocalDate convertToDate(String valor){
        if(valor == null || valor.length() != 10)
            return null;
        return LocalDate.parse(valor, sdf);

    }

}
