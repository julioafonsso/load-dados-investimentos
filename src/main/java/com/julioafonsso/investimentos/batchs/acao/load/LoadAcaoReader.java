package com.julioafonsso.investimentos.batchs.acao.load;

import com.julioafonsso.investimentos.model.acao.AcaoExcluidaRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component

public class LoadAcaoReader implements ItemReader<String> {

    private final static Logger LOGGER = LoggerFactory.getLogger(LoadAcaoReader.class);
    private final Elements acoes;
    private int indexItem;

    @Autowired
    AcaoExcluidaRepository acaoExcluidaRepository;

    public LoadAcaoReader() throws IOException {

        Document doc = Jsoup.connect("https://fundamentus.com.br/resultado.php")
                .get();
        this.acoes = doc.getElementsByTag("tbody").get(0).getElementsByTag("tr");
        this.indexItem = 0;
    }

    @Override
    public synchronized String read() {

        while (indexItem < acoes.size()){
            String codigo = acoes.get(indexItem).getElementsByTag("td").get(0).text();
            indexItem++;

            if(this.acaoExcluidaRepository.existsById(codigo))
                continue;
            return codigo;
        }
        return null;
    }
}
