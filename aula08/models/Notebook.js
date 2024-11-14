class Notebook {
    #numeroDeSerie
    #preco
    constructor (numeroDeSerie, marca, modelo, cor, preco){
    this.#numeroDeSerie = numeroDeSerie
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.#preco = preco
}
get getNumeroDeSerie(){
    return this.#numeroDeSerie
}
get getPreco(){
    return this.#preco
}
set setPreco(novoPreco){
    this.#preco = novoPreco
}
set setNumeroDeSerie(novoNumeroDeSerie){
    this.#numeroDeSerie = novoNumeroDeSerie
}

}
module.exports = { Notebook }