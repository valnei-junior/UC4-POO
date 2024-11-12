const { Veiculo } = require('../models/veiculo'); // importa o módulo veiculo
const { Carro } = require('../models/carro');   // importa o módulo carro
const { Moto } = require('../models/moto');     // importa o módulo moto
const bancoVeiculos = [];   // cria um array vazio

class veiculoController { // 

    criarVeiculo(ano, marca, modelo, cor, tipo){ // método para criar um veículo

        let veiculo;

        if (tipo.toLowerCase() === 'carro'){ // verifica se o tipo é carro
            veiculo = new Carro(ano, marca, modelo, cor);   // cria um novo carro

        }else if(tipo.toLowerCase() === 'moto'){    // verifica se o tipo é moto
            veiculo = new Moto(ano, marca, modelo, cor);  // cria uma nova moto

        }else if(tipo.toLowerCase() === 'veiculo'){ // verifica se o tipo é veículo
            veiculo = new Veiculo(ano, marca); // cria um novo veículo
        }else{
            console.log ('Tipo de veículo inválido'); // imprime a mensagem
            return;     // retorna
        }
        bancoVeiculos.push(veiculo);    // adiciona o veículo ao array
        console.log('Veículo criado com sucesso!!!');   // imprime a mensagem
    }
    listarVeiculos(){
        if (bancoVeiculos.length > 0){ // verifica se o array está vazio
            console.log(' === Veiculos Registrados ==='); // imprime a mensagem
            bancoVeiculos.forEach((veiculo, index) => { // percorre o array
                console.log(`Veículo ${index + 1}`); // imprime o índice do veículo
                veiculo.getInfo(); // chama o método getInfo() do veículo
                veiculo.calculaValor(); // chama o método calculaValor() do veículo
            });

        } else{  // se o array estiver vazio
            console.log('Nenhum veículo registrado'); // imprime a mensagem
        }
        }
    }


module.exports = {veiculoController}; // exporta o módulo veiculoController
