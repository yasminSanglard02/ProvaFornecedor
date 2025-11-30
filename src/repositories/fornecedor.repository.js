import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS fornecedor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cnpj TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL

        )
    `);

function createFornecedorRepository(novoFornecedor) {
    return new Promise((resolve, reject) => {

        const {
            nome,
            cnpj,
            email
        } = novoFornecedor;

        db.run(
            `INSERT INTO fornecedor (nome, cnpj, email)
            VALUES(?,?,?)`,
           [nome, cnpj, email],
           (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve ({
                        id: this.lastID,
                        ...novoFornecedor
                    });
                }
           }
        );
   });
}

function findFornecedorByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT
                id, nome, cnpj, email
            FROM fornecedor
            WHERE id = ?`,
            [id],
            (error, row) => {
                if(error){
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        )
    });

}

function findAllFornecedorRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT
                *
            FROM fornecedor`,
            [],
            (error, row) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        )
    });

}

function updateFornecedorRepository(id, fornecedor) {
    return new Promise((resolve, reject) => {

        const {
            nome,
            cnpj,
            email
        } = fornecedor;

        db.run(
            `UPDATE fornecedor SET
                nome = ?,
                cnpj = ?,
                email = ?
            WHERE id = ?`,
            [nome, cnpj, email],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...fornecedor
                    });
                }
            }
        );
    });
}

function deleteFornecedorRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM fornecedor
            WHERE id = ?`,
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        message: "Usuario deletado com sucesso",
                    });
                }
            }
        );
    });
}

export default {
    createFornecedorRepository,
    findFornecedorByIdRepository,
    findAllFornecedorRepository,
    updateFornecedorRepository,
    deleteFornecedorRepository
}