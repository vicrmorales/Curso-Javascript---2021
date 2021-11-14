console.log('a =', a)
var a = 2
console.log('a =', a)

//Normalmente iria causar erro na primeira linha, mas por ter sido declarado depois a variavel a, o JS faz o hoisting da variavel


//console.log('b =', b)
let b = 2 //Usando o let causa erro na linha anterior
console.log('b =', b)