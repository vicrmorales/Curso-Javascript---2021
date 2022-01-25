const contarCaractere = function(carac,strg){
    let contador = 0
    for(let i = 0; i < strg.length;i++){
        if(strg[i] == carac){
            contador++
        }
    }
    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
