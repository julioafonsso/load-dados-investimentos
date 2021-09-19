package com.julioafonsso.investimentos.model.acao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Repository
public interface AcaoRepository extends JpaRepository<Acao,Integer> {

    int deleteByCodigoAndDataCotacao(String codigo, LocalDate dataCotacao);

    @Transactional
    @Modifying
    @Query("update Acao a set a.indUltimaCotacao = false where a.codigo = :codigo and a.indUltimaCotacao = true")
    int updateAcaoIndUltimaCotacaoToFalse(@Param("codigo") String codigo);
}
