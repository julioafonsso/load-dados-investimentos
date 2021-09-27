package com.julioafonsso.investimentos.model.opcao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

public interface OpcaoRepository extends JpaRepository<Opcao, Long> {

    int deleteByCodigoAndDataCotacao(String codigo, LocalDate dataCotacao);

    @Transactional
    @Modifying
    @Query("update FundoImobiliario f set f.indUltimaCotacao = false where f.codigo = :codigo and f.indUltimaCotacao = true")
    int updateAcaoIndUltimaCotacaoToFalse(@Param("codigo") String codigo);
}
