// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 ->{...} causa erro pois o objeto é constante e está tentando atribuir outro endereço de memoria
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa) // Não é possivel mais alterar o objeto
pessoa.nome = 'Maria' //Não causa erro no freeze e não altera
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome:'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)