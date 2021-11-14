// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //Permite retirar algumas variaveis para fora da estrutura pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Permite definir outros nomes para as variaveis internas
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //Tenta tirar variaveis que não existem e define um valor default para bemHumorada
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa //Causa erro pois o dado aninhado em conta não existe e conta não existe
console.log(ag, num)