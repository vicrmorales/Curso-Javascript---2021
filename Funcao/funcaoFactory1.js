// Funções factory tem a função de criar um novo objeto baseado em um template para evitar o cenário a baixo

const prod1 = {
    nome: 'Celular',
    preco: 45
}

const prod2 = {
    nome: 'Computador',
    preco: 4500
}

// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())