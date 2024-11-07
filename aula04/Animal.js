class Animal{
    #nome;
    #idade;
    #corPelo;

    constructor(nome, idade, corPelo){
        this.#nome = nome;
        this.#idade = idade;
        this.#corPelo = corPelo;
    }

    

    emitirSom(){
        console.log (`${this.#nome} está emitindo som`);
    }
}
module.exports = {Animal};