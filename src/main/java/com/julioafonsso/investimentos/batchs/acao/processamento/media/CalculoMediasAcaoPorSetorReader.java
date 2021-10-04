package com.julioafonsso.investimentos.batchs.acao.processamento.media;

import com.julioafonsso.investimentos.model.acao.AcaoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculoMediasAcaoPorSetorReader implements ItemReader<String> {

    private static final Logger LOGGER = LoggerFactory.getLogger(CalculoMediasAcaoPorSetorReader.class);
    List<String> setores;
    int index;

    @Autowired
    AcaoRepository acaoRepository;


    @Override
    public synchronized String read(){
        if(this.setores == null){
            this.setores = this.acaoRepository.findDistinctSetor();
            this.index = setores.size();
        }

        if(index == 0 )
            return null;

        return this.setores.get(--this.index);
    }
}
