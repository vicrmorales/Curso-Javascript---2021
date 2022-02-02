const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

/* //Meu metodo
let p = new Promise(resolve => {
    resolve(caminho)
})

function exibirConteudo(_,conteudo){
    console.log(conteudo.toString())
}

p.then(caminhoPromisse => fs.readFile(caminhoPromisse,exibirConteudo))

*/

//Metodo do professor

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(console.log)