const calcularSalario = function(horasTrabalhadas,valorPorHora){
    let salario = horasTrabalhadas*valorPorHora
    return `Salário igual a R$ ${salario}`
}

console.log(calcularSalario(150,40.5))