package com.julioafonsso.investimentos.batchs.acao.load;


import com.julioafonsso.investimentos.model.LogErrorRepository;
import com.julioafonsso.investimentos.model.acao.Acao;
import com.julioafonsso.investimentos.model.acao.AcaoExcluida;
import com.julioafonsso.investimentos.model.acao.AcaoExcluidaRepository;
import com.julioafonsso.investimentos.model.acao.AcaoRepository;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class LoadAcaoWriter implements ItemWriter<Acao> {

    @Autowired
    AcaoRepository acaoRepository;

    @Autowired
    AcaoExcluidaRepository acaoExcluidaRepository;

    @Autowired
    LogErrorRepository logErrorRepository;

    @Override
    public void write(List<? extends Acao> acoes) {


        acoes.forEach(acao -> {

            if (acao != null) {
                try {
                    if (acao.isDataCotacaoOldThen3Months()) {
                        saveAcaoExcluida(acao.getCodigo(), acao.getDataCotacao());
                    } else {
                        this.acaoRepository.deleteByCodigoAndDataCotacao(acao.getCodigo(), acao.getDataCotacao());
                        this.acaoRepository.updateAcaoIndUltimaCotacaoToFalse(acao.getCodigo());
                        this.acaoRepository.save(acao);

                    }
                } catch (Exception e) {
                    logErrorRepository.save(acao, e);
                }
            }else{
                System.out.println("VEIO NULL");
            }


        });
    }

    private void saveAcaoExcluida(String codigo, LocalDate dataUltimaCotacao) {
        this.acaoExcluidaRepository.
                findById(codigo).ifPresentOrElse(
                        acaoExcluida -> {
                            acaoExcluida.setDataUltimaCotacao(dataUltimaCotacao);
                            this.acaoExcluidaRepository.save(acaoExcluida);
                        },
                        () -> this.acaoExcluidaRepository.save(new AcaoExcluida(codigo, dataUltimaCotacao))
                );

    }
}
