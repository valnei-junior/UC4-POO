const { Veiculo } = require('./veiculo'); // importa o módulo veiculo

class Moto extends Veiculo { //classe Moto herda de Veiculo
    #modelo     //atributo privado #modelo
    #cor    //atributo privado #cor
        
    constructor(ano, marca, modelo, cor){   //construtor da classe Moto
        super(ano, marca)   //chama o construtor da classe Veiculo
        this.#modelo = modelo   //atribui o valor de modelo ao atributo privado #modelo
        this.#cor = cor     //atribui o valor de cor ao atributo privado #cor
        Object.freeze(this)     //impede que o objeto seja modificado
    }

    get getModelo(){    //método get para retornar o valor de #modelo
        return this.#modelo     //retorna o valor de #modelo
    }
    get getCor(){   //método get para retornar o valor de #cor
        return this.#cor    //retorna o valor de #cor
    }
    set setModelo(modelo){ //método set para atribuir um valor a #modelo
        this.#modelo = modelo   //atribui o valor de modelo ao atributo privado #modelo
    }
    set setCor(cor){    //método set para atribuir um valor
        this.#cor = cor     //atribui o valor de cor ao atributo privado #cor
    }
    calculaValor(){ //método calculaValor
        console.log(`Valor estimado da moto: R$ ${(this.getAno) * 100}`) //imprime o valor estimado da moto
    }
    getInfo(){  //método getInfo
        console.log( `Ano: ${this.getAno} Marca: ${this.getMarca} Modelo: ${this.getModelo} Cor: ${this.getCor}`);  //imprime as informações da moto
        
    }
    
}
module.exports = { Moto } //exporta a classe Moto