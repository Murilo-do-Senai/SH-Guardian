import { conexao } from "../config/SQL.js";

export async function ListarCliente(){
    const [resultado] = await conexao.query(`
        SELECT ID,NOME,CPF,
        EMAIL,SENHA,ENDERECO,PLANO,telefone.FONE,CARTAO.CARTAO_NUM,CARTAO.TIPO

        FROM clientes
        left JOIN telefone ON clientes.ID = telefone.ID_CLIENTE
        left JOIN cartao ON clientes.ID = CARTAO.ID_CLIENTE;
        `)

    return resultado;
}
export async function ListarClienteId(id){
    const [resultado] = await conexao.query(`
        SELECT ID,NOME,CPF,
        EMAIL,SENHA,ENDERECO,PLANO,telefone.FONE,CARTAO.CARTAO_NUM,CARTAO.TIPO

        FROM clientes
        left JOIN telefone ON clientes.ID = telefone.ID_CLIENTE
        left JOIN cartao ON clientes.ID = CARTAO.ID_CLIENTE

        WHERE ID = ?
        `,[id])

    return resultado[0];
}

export async function RegistroCliente({nome,cpf,email,senha,endereco,plano}) {

    const [resultado] = await conexao.query(`
        INSERT INTO CLIENTES (NOME,CPF,EMAIL,SENHA,ENDERECO,PLANO)
        VALUES (?,?,?,?,?,?)
        `,[nome,cpf,email,senha,endereco,plano || "essencial"|| "profissional"|| "premium"])

    return resultado.insertId;
    
}

export async function AtualizarCliente(id,nome,email,endereco,plano,) {

    const [resultado] = await conexao.query(`
        UPDATE CLIENTES SET NOME = ?,EMAIL = ?,ENDERECO = ?,PLANO = ?
        WHERE ID = ?
        `,[nome,email,endereco,plano || "essencial", id])

        return resultado.affectedRows;
    
}

export async function DeletarCliente(id){

    const [resultado] = await conexao.query(`
        DELETE FROM CLIENTES WHERE ID = ?;
        `,[id])

        return resultado[0];
}

///////////////////////////////////////////////////////////////////////////////

export async function RegistroCartao(CARTAO_NUM,TIPO,id_cliente) {

    const [resultado] = await conexao.query(`
        INSERT INTO CARTAO (CARTAO_NUM,TIPO,id_cliente)
        VALUES (?,?,?)
        `,[CARTAO_NUM,TIPO || "credito"|| "debito",id_cliente])

    return resultado.insertId;
    
}

export async function AtualizarCartao(id,CARTAO_NUM,TIPO) {

    const [resultado] = await conexao.query(`
        UPDATE CARTAO SET CARTAO_NUM = ?,TIPO = ? 
        `,[id,CARTAO_NUM,TIPO || "credito"|| "debito"])

        return resultado[0]
    
}

export async function DeletarCartao(id){
    const [resultado] = await conexao.query(`
        DELETE FROM CARTAO WHERE ID = ?
        `,[id])
        return resultado[0]
}

/////////////////////////////////////////////////////////////////////////////////

export async function RegistroTelefone(fone,id_cliente) {

    const [resultado] = await conexao.query(`
        INSERT INTO TELEFONE (FONE,id_cliente)
        VALUES (?,?)
        `,[fone,id_cliente])

    return resultado.insertId;
    
}

export async function AtualizarTelefone(id,FONE) {

    const [resultado] = await conexao.query(`
        UPDATE TELEFONE SET FONE = ? WHERE ID = ?
        `,[id,FONE])

        return resultado[0]
    
}

export async function DeletarTelefone(id){
    const [resultado] = await conexao.query(`
        DELETE FROM TELEFONE WHERE ID = ?
        `,[id])

        return resultado[0]
}