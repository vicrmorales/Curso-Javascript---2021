function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 1900))
console.log(criarProduto('Palio', 19000, 0.2))