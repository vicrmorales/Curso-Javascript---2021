const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // A função minhaFuncao leva em consideração o local onde foi definida para atribuir valores as variaveis