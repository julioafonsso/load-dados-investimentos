package com.julioafonsso.investimentos.model.fi;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@Repository
public interface FundoImobiliarioRepository
        extends JpaRepository<FundoImobiliario,Integer> {

    int deleteByCodigoAndDataCotacao(String codigo, LocalDate dataCotacao);

    @Transactional
    @Modifying
    @Query("update FundoImobiliario f set f.indUltimaCotacao = false where f.codigo = :codigo and f.indUltimaCotacao = true")
    int updateAcaoIndUltimaCotacaoToFalse(@Param("codigo") String codigo);
}
