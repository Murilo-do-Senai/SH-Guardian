import { conexao } from '../config/SQL.js';
import * as ClienteModel from '../model/ClientesModel.js';
import bcrypt from 'bcrypt';

export const ListarCliente = async(req,res) =>{

    try{
    const cliente = await ClienteModel.ListarCliente();

    res.status(200).json(cliente)
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao listar CLIENTES"})
        console.error(error);
        
    }
}
export const ListarClienteId = async(req,res) =>{
    const id = req.params.id;
    try{
    const cliente = await ClienteModel.ListarClienteId(id);

    if(!cliente) return res.status(404).json({msg:"Usuario não encontrado"});

    res.status(200).json(cliente)
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao listar"})
        console.error(error);
    }
}

export const RegistroCliente = async(req,res) =>{
    
    try {

       const {nome,cpf,email,senha,endereco,plano,fone,cartao_num,tipo} = req.body; 

        if (!nome || !cpf || !email || !senha || !endereco || !fone || !cartao_num) {
            return res.status(400).json({ messagem: "É necessário preencher os campos" })
        }

        const [rows] = await conexao.query("SELECT * FROM CLIENTES WHERE email = ?", [email]);

        if (rows.length > 0) {
            return res.status(400).json({ messagem: "Email ja cadastrado" })
        }

       const senhaCriptografa = await bcrypt.hash(senha, 10);

        const id = await ClienteModel.RegistroCliente({nome,cpf,email,senha:senhaCriptografa,endereco,plano});

        const telefone = await ClienteModel.RegistroTelefone(fone,id);

        const cartao = await ClienteModel.RegistroCartao(cartao_num,tipo,id);

        res.status(201).json({msg:"Resgistro completo com exito",id})

    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao registrar"})
        console.error(error);
        
    }
}

export const AtualizarCliente = async(req,res) =>{
        const id = req.params.id;
        const {nome,email,endereco,plano} = req.body;
    try {
        
        if (!nome || !email || !endereco) {
            return res.status(400).json({ messagem: "É necessário preencher os campos" })
        }

        const atualizar = await ClienteModel.AtualizarCliente(id,nome,email,endereco,plano);

        if(!atualizar) return res.status(404).json({msg:"Usuario não encontrado",id});

        res.status(200).json({msg:"Dados autualizados com exito"})
        
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao atualizar"})
        console.error(error);
    }
}

export const DeletarCliente = async(req,res) =>{

    try {
        const id = req.params.id;

        if(!id) return res.status(404).json({msg:"Usuario não encontrado"});

        const deletar = await ClienteModel.DeletarCliente(id);

        res.status(201).json({msg:"Dados apagados com exito"})
        
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao apagar"})
        console.error(error);
    }
}