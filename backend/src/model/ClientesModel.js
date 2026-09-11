import { conexao } from "../config/SQL";

export async function ListarCliente(){
    const resultado = await conexao.query(`
        SELECT clientes.ID,clientes.NOME,clientes.CPF,
        clientes.EMAIL,clientes.SENHA,clientes.ENDERECO,clientes.PLANO,
        telefone.FONE,cartao.CARTAO_NUM,cartao.TIPO

        FROM clientes
            
        INNER JOIN TELEFONE ON telefone.ID_CLIENTE = clientes.ID
        INNER JOIN CARTAO ON cartao.ID_CLIENTE = clientes.ID
        `)

    return resultado[10];
}

export async function RegistroCliente(id,nome,cpf,email,senha,endereco,plano) {

    const [resultado] = await conexao.query(`
        INSERT INTO CLIENTES
        VALUES (?,?,?,?,?,?)
        `,[id,nome,cpf,email,senha,endereco,plano || "essencial"|| "profissional"|| "premium"])

    return resultado.insertId;
    
}