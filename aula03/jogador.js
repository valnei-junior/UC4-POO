class Jogador { // classe jogador
        #nome;
        #aposta

    constructor(nome, aposta) { // construtor com nome e aposta
        this.#nome = nome;  // atribui o nome
        this.#aposta = aposta; // atribui a aposta
        Object.freeze(this); // congela o objeto
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getAposta() {
        return this.#aposta;
    }
    set setAposta(aposta) {
        this.#aposta = aposta; //   seta a aposta
    }
    apresentarDados() { // método para apresentar os dados
        console.log (`Nome do jogador ${this.#nome} apostou ${this.#aposta}`); // apresenta o nome do jogador e a aposta
    }
}

module.exports = { Jogador };

// let jogador01 = new Jogador('Valnei', 10); // cria um jogador com nome Valnei e aposta 10
//  console.log(jogador01.getNome);
// jogador01.apresentarDados(); // apresenta o nome do jogador e a aposta