const { Animal } = require('./Animal');

class Cachorro extends Animal{
    #raca;

    constructor(raca){
        super();
        this.#raca = raca;
    }
    emitirSom(){
        console.log (`${this.getNome} está latindo o au au!`);
    }
}
module.exports = {Cachorro};                                                                                                                                                                                                                                       