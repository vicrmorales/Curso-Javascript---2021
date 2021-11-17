function tratarErroELancar(erro) {
    //throw new Error('Mensagem de erro alternativo')
    throw true
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)