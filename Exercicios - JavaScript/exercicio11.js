const receberPrimeiroEUltimoElemento = function(array){
    let tam = array.length
    let prim = array[0]
    let ult = array[tam-1]
    return [prim,ult]
}

console.log(receberPrimeiroEUltimoElemento([7,15,"Olá"]))