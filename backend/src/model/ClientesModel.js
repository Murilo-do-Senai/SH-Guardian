import { conexao } from "../config/SQL.js";

export async function ListarCliente(){
    const [resultado] = await conexao.query(`
        SELECT ID,NOME,CPF,
        EMAIL,SENHA,ENDERECO,PLANO

        FROM clientes
        `)

    return resultado;
}
export async function ListarClienteId(id){
    const [resultado] = await conexao.query(`
        SELECT ID, NOME, CPF,
        EMAIL,SENHA,ENDERECO,PLANO

        FROM clientes
        
        WHERE ID = ?
        `,[id])

    return resultado;
}

export async function RegistroCliente({nome,cpf,email,senha,endereco,plano}) {

    const [resultado] = await conexao.query(`
        INSERT INTO CLIENTES (NOME,CPF,EMAIL,SENHA,ENDERECO,PLANO)
        VALUES (?,?,?,?,?,?)
        `,[nome,cpf,email,senha,endereco,plano || "essencial"|| "profissional"|| "premium"])

    return resultado.insertId;
    
}

export async function AtualizarCliente(id,nome,email,endereco,plano) {

    const [resultado] = await conexao.query(`
        UPDATE CLIENTE SET NOME = ?,EMAIL = ?,ENDERECO = ?,PLANO = ?
        WHERE ID = ?
        `,[id,nome,email,endereco,plano])

        return resultado[0]
    
}

export async function DeletarCliente(id){
    const [resultado] = await conexao.query(`
        DELETE FROM CLIENTES WHERE ID = ?
        `,[id])

        return resultado[0];
}

///////////////////////////////////////////////////////////////////////////////

export async function RegistroCatao(CARTAO_NUM,TIPO,ID_CLIENTE) {

    const [resultado] = await conexao.query(`
        INSERT INTO CARTAO
        VALUES (?,?) WHERE ID_CLIEANTE = ?
        `,[CARTAO_NUM,TIPO || "credito"|| "debito",ID_CLIENTE])

    return resultado.insertId;
    
}

export async function AtualizarCartao(id,CARTAO_NUM,TIPO) {

    const [resultado] = await conexao.query(`
        UPDATE CARTAO SET CARTAO_NUM = ?,TIPO = ? WHERE ID = ?
        `,[id,CARTAO_NUM,TIPO])

        return resultado[0]
    
}

export async function DeletarClartao(id){
    const [resultado] = await conexao.query(`
        DELETE FROM CARTAO WHERE ID = ?
        `,[id])
        return resultado[0]
}

/////////////////////////////////////////////////////////////////////////////////

export async function RegistroTelefone(FONE,ID_CLIENTE) {

    const [resultado] = await conexao.query(`
        INSERT INTO TELEFONE
        VALUES (?) WHERE ID_CLIEANTE = ?
        `,[FONE,ID_CLIENTE])

    return resultado.insertId;
    
}

export async function AtualizarTelefone(id,FONE) {

    const [resultado] = await conexao.query(`
        UPDATE CLIENTE SET FONE = ? WHERE ID = ?
        `,[id,FONE])

        return resultado[0]
    
}

export async function DeletarTelefone(id){
    const [resultado] = await conexao.query(`
        DELETE FROM TELEFONE WHERE ID = ?
        `,[id])

        return resultado[0]
}