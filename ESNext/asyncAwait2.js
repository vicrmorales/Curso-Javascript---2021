const { rejects } = require("assert")

function gerarNumerosEntre(min,max,numerosProibidos){
    if(min > max) {
        [min,max] = [max,min]
    }
    return new Promise((resolve,reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repedito!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros){
    const numeros =[]
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1,60,numeros))
    }
    return numeros
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)