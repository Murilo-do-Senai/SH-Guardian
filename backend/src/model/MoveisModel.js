import { conexao } from "../config/SQL.js";

export async function ListarMovel(){
    const [resultado] = await conexao.query(`
            SELECT ID, NOME_MOVEL, TIPO, CONSUMO_ENERGIA FROM MOVEIS
        `);

    return resultado;
}

export async function ListarporID(id){
    const [resultado] = await conexao.query(`
            SELECT ID, NOME_MOVEL, TIPO, CONSUMO_ENERGIA FROM MOVEIS WHERE ID = ?
        `,[id]);

    return resultado;
}

export async function RegistroMovel(nome_movel,tipo,consumo_energia){

    const [resultado] = await conexao.query(`
        INSERT INTO MOVEIS (NOME_MOVEL,TIPO,CONSUMO_ENERGIA) VALUES (?,?,?)
        `,[nome_movel,tipo,consumo_energia])

        return resultado.insertId;
}

export async function AtualizarMovel(nome_movel,tipo,consumo_energia,id){
    const [resultado] = await conexao.query(`
        UPDATE MOVEIS SET NOME_MOVEL = ?,TIPO = ?,CONSUMO_ENERGIA = ? WHERE ID = ?
        `,[nome_movel,tipo,consumo_energia,id])

    return resultado.affectedRows;
}

export async function DeletarMovel(id){
    const [resultado] = await conexao.query(`
        DELETE FROM MOVEIS WHERE ID = ?
        `,[id])

    return resultado;
}