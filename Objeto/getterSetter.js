const  sequencia = {
    _valor: 1, // _conveção para varaivel interna
    get valor() { return this._valor++},
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }   
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900 //Não vai alterar pois é menor e o set não irá alterar
console.log(sequencia.valor,sequencia.valor)