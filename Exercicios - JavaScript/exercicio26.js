const removerVogais = function(strg){
    const vogais = ['a','e','i','o','u']
    vogais.forEach(vogais => strg = strg.replace(vogais,""))
    return strg
}

console.log(removerVogais("Fundamentos"))