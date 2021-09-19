package com.julioafonsso.investimentos.model;

import com.julioafonsso.investimentos.model.acao.Acao;
import com.julioafonsso.investimentos.model.fi.FundoImobiliario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogErrorRepository extends JpaRepository<LogError, Long> {

    default void save(Acao acao, Exception e) {
        this.save(
                new LogError(acao.getCodigo(),
                        "ACAO",
                        e.getMessage().substring(0, 255))
        );
    }

    default void save(FundoImobiliario fundo, Exception e) {
        this.save(
                new LogError(fundo.getCodigo(),
                        "FI",
                        e.getMessage().substring(0, 255))
        );
    }

}
