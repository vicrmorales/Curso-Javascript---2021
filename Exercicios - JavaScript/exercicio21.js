const menorNumero = function(array){
    let menor = array[0]
    for(let i = 0;i < array.length; i++){
        if(menor > array[i]){
            menor = array[i]
        }
    }
    return menor
}

console.log(menorNumero([5, -15, 50, 3]))