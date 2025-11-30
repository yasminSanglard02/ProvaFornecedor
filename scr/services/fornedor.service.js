import fornecedorRepository from "../repositories/fornecedor.repository.js";

async function createFornecedorService(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);

    if (!fornecedor) {
        throw new Error("Error ao criar cliente");
    }

    return fornecedor;
}

async function findAllFornecedorService() {
    const fornecedores = await fornecedorRepository.findAllFornecedorRepository();
    return fornecedores;
}

async function findFornecedorByIdService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Usuario nao encontrado");
    }

    return fornecedor;
}

async function updateFornecedorService(novoFornecedor, id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Fornecedor nao encontrado");
    }

    const fornecedorAtualizado = await fornecedorRepository.updateFornecedorRepository(id, novoFornecedor);

    return fornecedorAtualizado;
}

async function deleteFornecedorService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Fornecedor nao encontrado");
    }

    const mensagemRetorno = await fornecedorRepository.deleteFornecedorRepository(id);

    return mensagemRetorno;

}

export default {
    createFornecedorService,
    findAllFornecedorService,
    findFornecedorByIdService,
    updateFornecedorService,
    deleteFornecedorService
}