const buscarPalavrasSemelhantes = function(palavra,array){
    return array.filter(array => array.includes(palavra))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))