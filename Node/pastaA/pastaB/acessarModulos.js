const moduloA = require('../../moduloA')    //../ sobe uma pasta no caminho relativo. Nesse caso ele volta duas pastas
//const moduloA = require('/home/victor/Github/Curso-Javascript---2021/Node/moduloA.js')    No modo absoluto. Não é recomendado
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)