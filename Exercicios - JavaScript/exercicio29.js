const segundoMaior = function(array){
    let maiorNum = array[0]
    let segundoMai = array[0] - 1
    for(let i = 0;i < array.length;i++){
        if(array[i]>= maiorNum){
            segundoMai = maiorNum
            maiorNum = array[i]
        }else if(array[i]>= segundoMai){
            segundoMai = array[i]
        }
    }
    return segundoMai

}

console.log(segundoMaior([12, 16, 1, 5]))