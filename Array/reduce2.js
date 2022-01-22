const alunos = [
    {nome:'João',nota:7.3,bolsista:true},
    {nome:'Maria',nota:9.2,bolsista:false},
    {nome:'Pedro',nota:9.8,bolsista:true},
    {nome:'Ana',nota:8.7,bolsista:true},
]

//Desafio 1: Todos os alunos são bolsistas?

const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    return (atual&&acumulador)
})
console.log(resultado1)

//Desafio 2: Algum aluno é bolsista?

const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    return (atual || acumulador)
})
console.log(resultado2)