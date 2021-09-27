package com.julioafonsso.investimentos.batchs.opcao.load;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.batch.item.ItemReader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class LoadOpcaoReader implements ItemReader<String> {


    private List<String> listaOpcoes;
    private int index;

    private LoadOpcaoReader() throws IOException {
        this.listaOpcoes = new ArrayList<>();

        Document doc = Jsoup.connect("https://opcoes.net.br/opcoes/bovespa").get();
        doc.getElementsByTag("select").get(0).attributes().get("name");


        doc.getElementsByTag("select")
                .stream()
                .filter(element -> "IdAcao".equals(element.attributes().get("name")))
                .findFirst()
                .get()
                .getElementsByTag("option")
                .forEach(element -> {
                            if (element.text().trim().length() > 0)
                                this.listaOpcoes.add(element.text());
                        }
                );

        this.index = 0;

    }

    @Override
    public synchronized String read() {
        if (index == this.listaOpcoes.size())
            return null;

        return this.listaOpcoes.get(index++);
    }
}
