const calcularMedia = function(array){
    let resultado = 0
    let contador = 0
    for(let i = 0;i < array.length; i++){
        resultado += array[i]
        contador++
    }
    return resultado/contador
}

console.log(calcularMedia([1, 2, 3, 4, 5]))