let p = new Promise(function (resolve){
    //resolve(3)  //Uma promessa só retorna um unico valor resolve(3,4) não iria funcionar. Deverá usar um array ou objeto.
    resolve(['Ana','Bia','Carlos','Daniel'])
})

//console.log(typeof Promise)

//console.log(typeof p)

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

    p.then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)