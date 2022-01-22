const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')  //Adiciona um novo elemento no final
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um novo elemento no inicio
console.log(pilotos)

//Adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remover
pilotos.splice(3,1) //Remove Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)   // Pega a partir da posição 1 até antes da 4
console.log(algunsPilotos2)