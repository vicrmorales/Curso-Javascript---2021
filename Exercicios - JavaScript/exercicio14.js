const objetoParaArray = function(obj){
    let subArray = []
    let array = []
    let chaves = Object.keys(obj)
    let valores = Object.values(obj)
    for(let i = 0; i < chaves.length;i++){
        subArray.push(chaves[i],valores[i])
        array.push(subArray)
        subArray = []
    }
    console.log(array)
    return array
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
