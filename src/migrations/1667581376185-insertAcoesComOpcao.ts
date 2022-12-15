import { MigrationInterface, QueryRunner } from "typeorm"

export class insertAcoesComOpcao1667581376185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ABEV3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ALPA4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('AMER3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('AZUL4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('B3SA3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BBAS3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BBDC3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BBDC4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BBSE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BEEF3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BOVA11');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BPAC11');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BRAP4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BRFS3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BRKM5');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('BRML3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CASH3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CIEL3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CMIG4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('COGN3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CPLE6');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CSAN3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CSNA3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CVCB3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('CYRE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('EGIE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ELET3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ELET6');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('EMBR3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('EQTL3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('EZTC3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('GGBR4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('GOAU4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('GOLL4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('HAPV3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('HYPE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('IRBR3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ITSA4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('ITUB4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('JBSS3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('KLBN11');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('LIGT3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('LREN3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('LWSA3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('MGLU3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('MRFG3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('MRVE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('MULT3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('NTCO3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('PCAR3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('PETR3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('PETR4');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('PETZ3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('PRIO3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('QUAL3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('RADL3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('RAIL3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('RENT3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('SANB11');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('SBSP3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('SUZB3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('TAEE11');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('UGPA3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('USIM5');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('VALE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('VBBR3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('VIIA3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('VIVT3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('WEGE3');");
        queryRunner.query("insert into acao_com_opcao (ticker) values ('YDUQ3');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
