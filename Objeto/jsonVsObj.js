const obj = { a: 1,b: 2,c: 3,soma(){ return a+b+c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) Incorreto
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Incorreto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Correto
console.log(JSON.parse('{"a":1.7,"b":"string","c":true,"d":{},"e":[]}')) //Correto com vários tipos diferentes dentro do JSON
