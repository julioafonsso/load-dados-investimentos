package com.julioafonsso.investimentos.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class LogError {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String codigo;

    @Column
    private String tipoAtivo;

    @Column
    private LocalDateTime dataError;

    @Column
    private String error;

    public LogError(String codigo, String tipoAtivo, String error) {
        this.codigo = codigo;
        this.tipoAtivo = tipoAtivo;
        this.dataError = LocalDateTime.now();
        this.error = error;
    }


    public LogError(){}


}
