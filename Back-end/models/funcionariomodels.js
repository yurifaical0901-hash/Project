const db = require('../config/db');

async function listarFuncionarios() {

    const resultado = await db.query(
        'SELECT * FROM funcionarios ORDER BY id'
    );

    return resultado.rows;
}

async function criarFuncionario(funcionario) {

    const {
        nome,
        cpf,
        email,
        cargo_id,
        departamento_id
    } = funcionario;

    const resultado = await db.query(
        `
        INSERT INTO funcionarios
        (
            nome,
            cpf,
            email,
            cargo_id,
            departamento_id
        )
        VALUES
        ($1,$2,$3,$4,$5)
        RETURNING *
        `,
        [
            nome,
            cpf,
            email,
            cargo_id,
            departamento_id
        ]
    );

    return resultado.rows[0];
}

module.exports = {
    listarFuncionarios,
    criarFuncionario
};