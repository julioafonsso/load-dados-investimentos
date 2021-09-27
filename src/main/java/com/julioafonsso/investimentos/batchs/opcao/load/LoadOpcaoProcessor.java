package com.julioafonsso.investimentos.batchs.opcao.load;

import com.julioafonsso.investimentos.batchs.opcao.load.pojo.OpcaoResponse;
import com.julioafonsso.investimentos.model.opcao.Opcao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class LoadOpcaoProcessor implements ItemProcessor<String, List<Opcao>> {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoadOpcaoProcessor.class);

    public static final DateTimeFormatter sdf = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Override
    public List<Opcao> process(String codigo) {

        ResponseEntity<OpcaoResponse> response = new RestTemplateBuilder()
                .build()
                .getForEntity(
                        "https://opcoes.net.br/opcoes/bovespa/" + codigo +
                                "/json",
                        OpcaoResponse.class
                );

        List<Opcao> lista = new ArrayList<>();

        response
                .getBody()
                .getDados()
                .getOpcoesPorVencimento().forEach(listaOpcoesVencimento -> {
                    listaOpcoesVencimento
                            .getListaCalls()
                            .forEach(call -> lista.add(createOpcao(codigo, listaOpcoesVencimento.getDataVencimento(), "CALL", call)));

                    listaOpcoesVencimento
                            .getListaPuts()
                            .forEach(put -> lista.add(createOpcao(codigo, listaOpcoesVencimento.getDataVencimento(), "PUT", put)));
                });


        return lista;
    }

    private Opcao createOpcao(String codigoAcao, Date dataVencimento, String tipo, Object[] dados) {
        Opcao opcao = new Opcao();
        opcao.setCodigoAcao(codigoAcao);
        opcao.setDataVencimento(convert(dataVencimento));
        opcao.setTipo(tipo);
        opcao.setCodigo(codigoAcao.substring(0, 4) + dados[0]);
        opcao.setIndFormadorMercado(((Integer) dados[1]) == 1 ? Boolean.TRUE : Boolean.FALSE);
        opcao.setModelo((String) dados[2]);
        opcao.setValorStrike((Double) dados[3]);
        opcao.setCotacao((Double) dados[5]);
        opcao.setDataCotacao(convert((String) dados[7]));
        opcao.setNumeroNegociacao((Integer) dados[8]);
        opcao.setVolume((Double) dados[9]);
        opcao.setVolatilidade((Double) dados[10]);
        opcao.setDelta((Double) dados[11]);
        opcao.setGamma((Double) dados[12]);
        opcao.setThetaDinheiro((Double) dados[13]);
        opcao.setThetaPercentual((Double) dados[14]);
        opcao.setVega((Double) dados[15]);
        opcao.setIndUltimaCotacao(Boolean.TRUE);

        return opcao;

    }

    private LocalDate convert(String data) {
        return data == null || data.length() == 0 ? null :
                LocalDate.parse(data, sdf);
    }

    private LocalDate convert(Date data) {

        return data == null ? null :
                data
                        .toInstant()
                        .atZone(ZoneId.systemDefault())
                        .toLocalDate();
    }

}
