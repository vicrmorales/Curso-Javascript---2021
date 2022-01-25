const nomeDoMes = function(numDoMes){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[numDoMes - 1]
}

console.log(nomeDoMes(4))