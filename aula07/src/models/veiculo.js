class Veiculo {

    #ano
    #marca

    constructor (ano, marca){
        this.#ano = ano
        this.#marca = marca
        Object.freeze(this)
    }
    get getAno(){
        return this.#ano
    }
    get getMarca(){
        return this.#marca
    }
    set setAno(ano){
        this.#ano = ano
    }
    set setMarca(marca){
        this.#marca = marca
    }
    getInfo(){
        console.log( `Ano: ${this.getAno} Marca: ${this.getMarca}`);
    }
    calculaValor(){
        throw new Error("Método calculaValor() deve ser implementado.")
}
}
module.exports = { Veiculo }