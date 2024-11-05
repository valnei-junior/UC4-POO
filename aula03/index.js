const  prompt  = require('prompt-sync')(); // importa o inquirer

const { Dado } = require('./dado'); // importa a classe dado
const { Jogador } = require('./jogador'); // importa a classe jogador
const { SistemaAzar } = require('./sistemaAzar'); // importa a classe sistema de azar


function executar (){
   let novoTurno = "";
    console.log('Bem vindo ao jogo de azar!'); // apresenta a mensagem no console
do{
    const nome = prompt('Digite o nome do jogador: '); // solicita o nome do jogador
    const aposta = parseInt(prompt('Digite o valor da aposta de 1 á 6:')); // solicita o valor da aposta
    const lance = new Dado(); // cria um novo dado
    const jogador01 = new Jogador(nome, aposta); // cria um novo jogador com nome e aposta
    const tigrinho = new SistemaAzar(jogador01, lance); // cria um novo sistema de azar com jogador e dado
    tigrinho.verificarGanhador(); // verifica se o jogador ganhou ou perdeu
    novoTurno = prompt('Digite S para uma nova aposta ou N para sair: '); // pergunta se deseja jogar novamente

    }while(novoTurno !== 'N'); // enquanto a resposta for diferente de N ou n
    console.log('Obrigado por jogar!'); // apresenta a mensagem no console
}
executar();

// const lance = new Dado(); // cria um novo dado
// const jogador01 = new Jogador('Valnei',4); // cria um novo jogador com nome Valnei e aposta 2

// let aposta = 5; // cria uma variável aposta com valor 5
// const tigrinho = new SistemaAzar(jogador01, lance); // cria um novo sistema de azar com jogador e dado

// // tigrinho.getJogador.apresentarDados(); // apresenta o nome do jogador
// tigrinho.verificarGanhador(); // verifica se o jogador ganhou ou perdeu