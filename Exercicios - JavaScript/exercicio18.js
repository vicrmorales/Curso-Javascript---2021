const despesasTotais = function(array){
    let despesasTotal = 0
    for(let i = 0;i < array.length; i++){
        despesasTotal += array[i]["preco"]
    }
    return despesasTotal
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))