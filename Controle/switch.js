const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4: case 3:
            console.log('Recuperação')
            break
        case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(7.4)
imprimirResultado(4.3)
imprimirResultado(2.1)
imprimirResultado('Batata')