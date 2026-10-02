import * as MoveisModel from "../model/MoveisModel.js";

export const ListarMovel = async(req,res) =>{
    
try {
    const listar = await MoveisModel.ListarMovel();

    res.status(200).json(listar);
} catch (error) {
    res.status(500).json({msg:"Ocorreu um erro ao listar"})
    console.error(error);
    
}
}

export const ListarporID = async(req,res) =>{
    const id = req.params.id;
try {
    const listar = await MoveisModel.ListarporID(id);

    if(!listar) return res.status(404).json({msg:"Não encontrado"})

    res.status(200).json(listar);

} catch (error) {
    res.status(500).json({msg:"Ocorreu um erro ao listar"})
    console.error(error);
    
}
}

export const RegistroMovel = async(req,res)=>{
    const {nome_movel,tipo,consumo_energia} = req.body;

    try {
        if(!nome_movel || !tipo || !consumo_energia) return res.status(400).json({msg:"É necessario preencher todos os campos"});

        const id = MoveisModel.RegistroMovel(nome_movel,tipo,consumo_energia);

        res.status(201).json({msg:"Resgistro completo com exito",id});

    } catch (error) {
        res.status(500).json({msg:"Ocorreu um erro ao registrar"})
        console.error(error);
    }
}

export const AtualizarMovel = async(req,res) =>{
        const id = req.params.id;
        const {nome_movel,tipo,consumo_energia} = req.body;
    try {
        
        if(!nome_movel || !tipo || !consumo_energia) return res.status(400).json({msg:"É necessario preencher todos os campos"});

        const atualizar = await MoveisModel.AtualizarMovel(nome_movel,tipo,consumo_energia,id);

        if(!atualizar) return res.status(404).json({msg:"Movel não encontrado",id});

        res.status(200).json({msg:"Dados autualizados com exito"})
        
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao atualizar"})
        console.error(error);
    }
}

export const DeletarMovel = async(req,res) =>{
        const id = req.params.id;
    try {
        const deletar = await MoveisModel.DeletarMovel(id);

        if(!deletar) return res.status(404).json({msg:"Movel não encontrado",id});


        res.status(200).json({msg:"Dados apagados com exito"})
        
    }
    catch(error)
    {
        res.status(500).json({msg:"Ocorreu um erro ao apagar"})
        console.error(error);
    }
}