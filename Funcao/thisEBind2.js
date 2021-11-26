function Pessoa() {
    this.idade = 0

    const self = this //Impedi o this de variar 
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa