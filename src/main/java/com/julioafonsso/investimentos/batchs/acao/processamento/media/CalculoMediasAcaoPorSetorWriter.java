package com.julioafonsso.investimentos.batchs.acao.processamento.media;

import com.julioafonsso.investimentos.model.acao.DadosMedioPorSetor;
import com.julioafonsso.investimentos.model.acao.DadosMedioPorSetorRepository;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculoMediasAcaoPorSetorWriter implements ItemWriter<DadosMedioPorSetor> {

    @Autowired
    DadosMedioPorSetorRepository dadosMedioPorSetorRepository;

    @Override
    public void write(List<? extends DadosMedioPorSetor> list) throws Exception {

        list.forEach(dados->{
            this.dadosMedioPorSetorRepository.deleteBySetorAndData(dados.getSetor(), dados.getData());
            this.dadosMedioPorSetorRepository.updateIndUltimoCalculoToFalse(dados.getSetor());
            this.dadosMedioPorSetorRepository.save(dados);
        });
    }
}
