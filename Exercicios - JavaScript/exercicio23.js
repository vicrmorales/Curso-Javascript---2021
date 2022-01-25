const contarPalavras = function(frase){
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(contarPalavras("Sou uma frase"))