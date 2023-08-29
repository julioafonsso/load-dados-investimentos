import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertTiposPontuacoes1685960632169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 1, 'Bom Setor', 2 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 2, 'Nunca deu prejuizo', 4 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 3, 'Deu prejuizo, mas nos ultimos 5 anos deu lucro', 1 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 4, 'Divida da empresa menor que seu patrimonio', 2 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 5, 'Possui um bom ROE', 1 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 6, 'Teve bom crescimento no lucro', 2 );");
        queryRunner.query("insert into tipo_pontuacao (id, descricao, pontos) values ( 7, 'Teve bom crescimento na receita', 1 );");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
