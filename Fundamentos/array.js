const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores.length)

valores[4] = 10
console.log(valores)
valores.push({ id: 3 }, false, null, "Batata")
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
