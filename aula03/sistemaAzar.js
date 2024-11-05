const { Dado } = require('./dado'); // importa a classe dado
const { Jogador } = require('./jogador'); // importa a classe jogador


class SistemaAzar { // classe sistema de azar
    #dado;     // atributo dados
    #jogador;   // atributo jogador

    constructor(jogador, dado) { // construtor com jogador e dados
        if (dado instanceof Dado && jogador instanceof Jogador) { // verifica se o dado e o jogador são válidos
        this.#dado = dado;
        this.#jogador = jogador;

    } else {
        console.log (`Erro: O jogador ou o dado não são válidos`);
    }
        Object.freeze(this); // congela o objeto
    }
    get getDado() { // método para retornar os dados
        return this.#dado; // retorna os dados
    }
    get getJogador() { // método para retornar o jogador
        return this.#jogador;// retorna o jogador
    }
    set setDado(dado) { // método para setar os dados
        this.#dado = dado; // seta os dados
    }
    set setJogador(jogador) { // método para setar o jogador
        this.#jogador = jogador; // seta o jogador
    }
    verificarGanhador (){
        if (this.#dado.getface === this.#jogador.getAposta) { // verifica se a face do dado é igual a aposta do jogador
            console.log (`Parabéns ${this.#dado.getface} você ganhou!`);//
            this.#jogador.apresentarDados(); // apresenta os dados do jogador

        } else {
            console.log (`Que pena ${this.#dado.getface} você perdeu!`); // apresenta a mensagem de que perdeu
            this.#jogador.apresentarDados(); // apresenta os dados do jogador
        }
    }
}
module.exports = { SistemaAzar };