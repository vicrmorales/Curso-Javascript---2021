console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escolar Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function(){ //Alterar funções que já existem irá causar problemas
    return 'Lascou tudo'
}

console.log('Escola Coder'.reverse()) //Não irá inverter a string desejada pois a função toString foi alterada