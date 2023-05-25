import { Cliente } from "../models/Cliente.js";

export const clientesIndex = async(req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes)
    } catch (erro) {
        res.status(400).json(erro)
    }
}

export const clienteCreate = async (req, res) => {
    const{nome, indentidade,endereco,telefone} = req.body
    if(!nome || !indentidade || !endereco || !telefone){
        res.status(401).json({id: 0 , msg: "Erro... informe os dados solicitados"})
        return
    }
    try {
        const cliente = await Cliente.create({
            nome, indentidade, endereco, telefone
        })
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).json(error)
    }
}