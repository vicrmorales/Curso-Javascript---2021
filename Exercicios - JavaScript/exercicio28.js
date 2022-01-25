const filtrarPorQuantidadeDeDigitos = function(array,qntDigitos){
    let arrayFinal = []
    for(let i = 0; i < array.length;i++){
        let num = array[i]
        if(num.toString().length === qntDigitos){
            arrayFinal.push(num)
        }
    }
    return arrayFinal   
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))