package com.julioafonsso.investimentos.batchs.fi.load;


import com.julioafonsso.investimentos.model.LogErrorRepository;
import com.julioafonsso.investimentos.model.fi.FundoImobiliario;
import com.julioafonsso.investimentos.model.fi.FundoImobiliarioExcluido;
import com.julioafonsso.investimentos.model.fi.FundoImobiliarioExcluidoRepository;
import com.julioafonsso.investimentos.model.fi.FundoImobiliarioRepository;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoadFundoImobiliarioWriter implements ItemWriter<FundoImobiliario> {

    @Autowired
    FundoImobiliarioRepository fundoImobiliarioRepository;

    @Autowired
    FundoImobiliarioExcluidoRepository fundoImobiliarioExcluidoRepository;

    @Autowired
    LogErrorRepository logErrorRepository;

    @Override
    public void write(List<? extends FundoImobiliario> fundos) {
        fundos.forEach(fundo -> {
            try {
                if (fundo.isDataCotacaoOldThen3Months()) {
                    this.fundoImobiliarioExcluidoRepository.save(new FundoImobiliarioExcluido(fundo.getCodigo()));
                } else {

                    this.fundoImobiliarioRepository.deleteByCodigoAndDataCotacao(fundo.getCodigo(), fundo.getDataCotacao());
                    this.fundoImobiliarioRepository.updateAcaoIndUltimaCotacaoToFalse(fundo.getCodigo());
                    this.fundoImobiliarioRepository.save(fundo);
                }
            } catch (Exception e) {
                logErrorRepository.save(fundo, e);
            }

        });
    }
}
