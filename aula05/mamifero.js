const {Animal} = require("./animal") 

class mamifero extends Animal {
    #tipoPelo;
    #habitat;
    
    constructor (nome, idade, tipoPelo, habitat) {
        super(nome, idade);

        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
    }
    get getTipoPelo(){
        return this.#tipoPelo;
    }
    set setTipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo;
    }
    get getHabitat(){
        return this.#habitat;
    }
    set setHabitat(habitat){
        this.#habitat = habitat;
    }
    emitirSom(){
        console.log(`${this.getNome} O mamífero rugi ou grunhe`);
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Pelo: ${this.getTipoPelo}, Habitat: ${this.getHabitat}`);
    }
}
module.exports = {mamifero};