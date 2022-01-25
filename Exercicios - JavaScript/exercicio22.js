const funcaoDaSorte = function(num){
    let valor = Math.floor(Math.random()*11) + 1
    if (valor == num){
        return `Parabéns! O número sorteado foi o ${num}`
    }else{
        return `Que pena! O número sorteado foi o ${valor}`
    }
}

console.log(funcaoDaSorte(5))