const carrinho = [
    '{ "nome":"Borracha","preco":3.45}',
    '{ "nome":"Caderno","preco":13.90}',
    '{ "nome":"Kit de Lapis","preco":41.22}',
    '{ "nome":"Caneta","preco":7.50}'
]

// Retornar um array apenas com os preços
//Meu Metodo
const soPreco = e => e.split('"preco":',2)[1].split('}')[0]
console.log(carrinho.map(soPreco))

//Metodo do curso
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto =>produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)