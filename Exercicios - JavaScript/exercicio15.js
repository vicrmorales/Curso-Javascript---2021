const receberSomenteOsParesDeIndicesPares = function(array){
    let pares = []
    for(let i = 0;i < array.length;i++){
        let valor = array[i]
        if((i%2 == 0) && (valor%2 == 0)){
            pares.push(array[i])
        }
    }
    return pares
}

console.log(receberSomenteOsParesDeIndicesPares([1,2,2,4]))
