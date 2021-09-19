package com.julioafonsso.investimentos.model.acao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class AcaoExcluida {

    @Id
    private String codigo;

    @Column
    private LocalDate dataUltimaCotacao;

    private AcaoExcluida() {
    }

    public AcaoExcluida(String codigo, LocalDate dataUltimaCotacao) {
        this.codigo = codigo;
        this.dataUltimaCotacao = dataUltimaCotacao;
    }

    public void setDataUltimaCotacao(LocalDate dataUltimaCotacao) {
        this.dataUltimaCotacao = dataUltimaCotacao;
    }
}
