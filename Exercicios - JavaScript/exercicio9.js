const repetir = function(item,reps){
    let array = []
    for(let i = 0;i <reps;i++){
        array.push(item)
    }
    return array
}

console.log(repetir('Repetir',3))
console.log(repetir(7,5))