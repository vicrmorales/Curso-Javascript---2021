function gerarNumerosEntre(min,max,tempo){
    if(min > max) {
        [min,max] = [max,min]
    }
    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo) 
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,2000)
    ])
}

console.time('promise')
gerarVariosNumeros().then(console.log).then(()=>{
    console.timeEnd('promise')
})
