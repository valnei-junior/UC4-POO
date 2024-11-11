const { Veiculo } = require('./veiculo');

class Carro extends Veiculo {
    #modelo
    #cor
    
    constructor(ano, marca, modelo, cor){
        super(ano, marca)
        this.#modelo = modelo
        this.#cor = cor
        Object.freeze(this)
    }

    get getModelo(){
        return this.#modelo
    }
    get getCor(){
        return this.#cor
    }
    set setModelo(modelo){
        this.#modelo = modelo
    }
    set setCor(cor){
        this.#cor = cor
    }
    calculaValor(){
        console.log(`Valor estimado do carro: R$ ${(2024 - this.getAno) * 10000}`)
    }
    getInfo(){
        console.log( `Ano: ${this.getAno} Marca: ${this.getMarca} Modelo: ${this.getModelo} Cor: ${this.getCor}`);
        
    }
    
}
module.exports = { Carro }