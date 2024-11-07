class Animal{
    #nome;
    #idade;
    

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
       
    }
get getNome(){
    return this.#nome;
}
set setNome(nome){
    this.#nome = nome;
}
get getIdade(){
    return this.#idade;
}
get getIdade(){
    return this.#idade;
}
emitirSom(){
        console.log (`${this.#nome} está emitindo som`);
    }
getInfo(){
    console.log(`Nome: ${this.#nome}, Idade: ${this.#idade}`);
}
}
module.exports = {Animal};