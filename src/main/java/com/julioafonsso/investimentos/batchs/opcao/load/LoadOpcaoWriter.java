package com.julioafonsso.investimentos.batchs.opcao.load;

import com.julioafonsso.investimentos.model.opcao.Opcao;
import com.julioafonsso.investimentos.model.opcao.OpcaoRepository;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoadOpcaoWriter implements ItemWriter<List<Opcao>> {

    @Autowired
    private OpcaoRepository repository;


    @Override
    public void write(List<? extends List<Opcao>> list) {

        list.forEach(listOpcoes ->
                listOpcoes.forEach(opcao -> {
                    this.repository.deleteByCodigoAndDataCotacao(opcao.getCodigo(), opcao.getDataCotacao());
                    this.repository.updateAcaoIndUltimaCotacaoToFalse(opcao.getCodigo());
                    this.repository.save(opcao);
                })
        );


    }
}
