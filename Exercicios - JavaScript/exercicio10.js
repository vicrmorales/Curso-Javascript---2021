const simboloMais = function(reps){
    let palavra = ''
    for(let i = 0;i < reps; i++){
        palavra +='+'
    }
    return palavra
}

console.log(simboloMais(5))