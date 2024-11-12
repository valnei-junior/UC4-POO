class Veiculo { //classe Veiculo
    #ano    //atributo privado #ano
    #marca  //atributo privado #marca

    constructor (ano, marca){   //construtor da classe Veiculo
        this.#ano = ano     //atribui o valor de ano ao atributo privado #ano
        this.#marca = marca     //atribui o valor de marca ao atributo privado #marca
        Object.freeze(this)     //impede que o objeto seja modificado
    }

    get getAno(){   //método get para retornar o valor de #ano
        return this.#ano    //retorna o valor de #ano
    }

    get getMarca(){     //método get para retornar o valor de #marca
        return this.#marca  //retorna o valor de #marca
    }

    set setAno(ano){   //método set para atribuir um valor a #ano
        this.#ano = ano     //atribui o valor de ano ao atributo privado #ano
    }

    set setMarca(marca){    //método set para atribuir um valor a #marca
        this.#marca = marca     //atribui o valor de marca ao atributo privado #marca
    }

    getInfo(){  //método getInfo
        console.log( `Ano: ${this.getAno} Marca: ${this.getMarca}`); //imprime as informações do veículo
    }
    
    calculaValor(){     //método calcul
        throw new Error("Método calculaValor() deve ser implementado.") //lança um erro
}
}
module.exports = { Veiculo } //exporta a classe Veiculo