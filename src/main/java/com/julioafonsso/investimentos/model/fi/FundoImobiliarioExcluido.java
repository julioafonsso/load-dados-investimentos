package com.julioafonsso.investimentos.model.fi;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FundoImobiliarioExcluido {

    @Id
    private String codigo;

    private FundoImobiliarioExcluido(){}

    public FundoImobiliarioExcluido(String codigo){
        this.codigo = codigo;
    }

    public String getCodigo() {
        return codigo;
    }
}
