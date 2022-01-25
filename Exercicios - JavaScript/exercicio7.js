const estaEntre = function(numero,minimo,maximo,inclusivo){
    if (inclusivo && numero>=minimo && numero<=maximo){
        return true
    }
    else if(!inclusivo && numero>minimo && numero<maximo){
        return true
    }else{
        return false
    }
}

console.log(estaEntre(10,50,100))
console.log(estaEntre(16,100,150))
console.log(estaEntre(3,3,150))
console.log(estaEntre(3,3,150,true))