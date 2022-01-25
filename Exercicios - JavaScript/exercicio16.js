const checarAnoBissexto = function(ano){
    if(ano%4 == 0){
        if(ano%100 == 0){
            if(ano%400 == 0){
                return true
            }
            else{
                return false
            }
        }else{
            return true
        }
    }
    return false
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))