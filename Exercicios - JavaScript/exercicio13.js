const filtrarNumeros = function(array){
    let resultado = []
    for(let i = 0;i < array.length;i++){
        let tipo = typeof array[i]
        if(tipo == 'number'){
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))