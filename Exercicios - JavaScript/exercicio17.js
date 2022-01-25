const somarNumeros = function(array){
    let resultado = 0
    for(let i = 0; i < array.length;i++){
        resultado += array[i]
    }
    return resultado
}

console.log(somarNumeros([10, 10, 10]))