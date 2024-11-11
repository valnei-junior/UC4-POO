const prompt = require('prompt-sync')();    
const { veiculoController } = require('../controllers/veiculoController'); 

const controller = new veiculoController();

function iniciarSistema (){

    let opcao;

    do{
        console.log(' === Sistema de Gerenciamento de Veiculos ===');   
        console.log('1 - Cadastrar Veiculo');
        console.log('2 - Listar Veiculos');
        console.log('3 - Sair');
        opcao = prompt('Escolha uma opção: ');
       
        switch(opcao){
            case '1':
                adicionarVeiculo();
                break;

            case '2':
                controller.listarVeiculos();
                break;

            case '3':
                console.log('Saindo do sistema...');
                break;
            
            default:
                console.log('Opção inválida');

        }
    }while (opcao !== '3');
}

function adicionarVeiculo(){
    const tipo = prompt('Informe o tipo de veículo (Carro, Moto ou Veiculo): ');
    const ano = parseInt(prompt('Informe o ano do veículo: '));
    const marca = prompt('Informe a marca do veículo: ');
    const modelo = prompt('Informe o modelo do veículo: ');
    const cor = prompt('Informe a cor do veículo: ');

    controller.criarVeiculo(ano, marca, modelo, cor, tipo);
}
iniciarSistema();
// Compare this snippet from UC4-POO/aula07/src/views/index.js: