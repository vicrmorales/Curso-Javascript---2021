const removerPropriedade = function(obj,param){
    let newObj = obj
    delete newObj[param]
    return newObj
}

console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))

    