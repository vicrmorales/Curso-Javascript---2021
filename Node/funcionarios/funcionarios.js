const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const chineses = funcionarios.filter(funcionario => funcionario.pais == "China")    //const chineses = f => f.pais === "China"
    const chinesas = chineses.filter(chines => chines.genero == "F")    //const chinesas = f => f.genero === "F"
    let chinesaComPiorSalario = {}
    let menorSalario = chinesas[0].salario
    for(let i = 0;i < chinesas.length;i++){
        if(chinesas[i].salario < menorSalario){
            menorSalario = chinesas[i].salario
            chinesaComPiorSalario = chinesas[i]
        }
    }
    console.log(chinesaComPiorSalario)
})

