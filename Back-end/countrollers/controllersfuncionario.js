const funcionarioModel =
require('../models/funcionarioModel');

async function listar(req,res){

    const funcionarios =
    await funcionarioModel.listarFuncionarios();

    res.json(funcionarios);
}

async function criar(req,res){

    const funcionario =
    await funcionarioModel.criarFuncionario(
        req.body
    );

    res.status(201).json(funcionario);
}

module.exports = {
    listar,
    criar
};