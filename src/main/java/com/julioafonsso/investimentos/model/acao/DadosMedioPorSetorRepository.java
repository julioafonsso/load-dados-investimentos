package com.julioafonsso.investimentos.model.acao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Repository
public interface DadosMedioPorSetorRepository extends JpaRepository<DadosMedioPorSetor, Integer> {

    @Transactional
    @Modifying
    @Query("update DadosMedioPorSetor d set d.indUltimoCalculo = false where d.setor = :setor and d.indUltimoCalculo = true")
    int updateIndUltimoCalculoToFalse(@Param("setor") String setor);

    int deleteBySetorAndData(String setor, LocalDate data);
}
