const prompt = require('prompt-sync')();    
const { veiculoController } = require('../controllers/veiculoController'); 

const controller = new veiculoController();

function iniciarSistema (){

    let opcao;

    do{
        console.log(' === Sistema de Gerenciamento de Veiculos ===');   
        console.log('1 - Cadastrar Veiculo');
        console.log('2 - Listar Veiculos');
        console.log('3 - Editar ');
        console.log('4 - Excluir');
        console.log('0 - Sair');
        opcao = prompt('Escolha uma opção:(0 á 4) ');
       
        switch(opcao){
            case '0':
                console.log('Saindo do sistema...');
                break;

            case '1':
                adicionarVeiculo();
                break;

            case '2':
                controller.listarVeiculos();
                break;
            case '3':
                editarVeiculo();
                break;
            case '4':
                excluirVeiculo();
                break;
            
            default:
                console.log('Opção inválida');

        }
    }while (opcao !== '3'); // enquanto a opção for diferente de 0
}

function adicionarVeiculo(){ // função para adicionar um veículo
    const tipo = prompt('Informe o tipo de veículo (Carro, Moto ou Veiculo): ');    // solicita o tipo de veículo
    const ano = parseInt(prompt('Informe o ano do veículo: '));     // solicita o ano do veículo
    const marca = prompt('Informe a marca do veículo: ');// solicita a marca do veículo
    const modelo = prompt('Informe o modelo do veículo: '); // solicita o modelo do veículo
    const cor = prompt('Informe a cor do veículo: ');   // solicita a cor do veículo

    controller.criarVeiculo(ano, marca, modelo, cor, tipo);
}
iniciarSistema();
// Compare this snippet from UC4-POO/aula07/src/views/index.js:

function editarVeiculo(){
    controller.listarVeiculos();
    const indice = parseInt(prompt('Informe o índice do veículo que deseja editar: '));
    const result = controller.buscarId(indice);
    console.log(result);
    if (result ){

        console.log('Informe os novos dados do veículo:(Pressione enter para manter o valor) ');

        const marca = prompt('achei o veículo, informe a nova marca: ');
        const ano = parseInt(prompt('Informe o novo ano: '));
        const modelo = prompt('Informe o novo modelo: ');
        const cor = prompt('Informe a nova cor: ');
       
        const novosDados = {};

        if (marca) novosDados.marca = marca;
        if (ano) novosDados.ano = ano;
        if (modelo) novosDados.modelo = modelo;
        if (cor) novosDados.cor = cor;

        controller.editaVeiculo(indice, novosDados);
    if (result){

        console.log('Informe os novos dados do veículo:(Pressione enter para manter o valor) ');

        const marca = prompt('achei o veículo, informe a nova marca: ');
        const ano = parseInt(prompt('Informe o novo ano: '));
        const modelo = prompt('Informe o novo modelo: ');
        const cor = prompt('Informe a nova cor: ');
       
        const novosDados = {};

        if (marca) novosDados.marca = marca;
        if (ano) novosDados.ano = ano;
        if (modelo) novosDados.modelo = modelo;
        if (cor) novosDados.cor = cor;

        controller.editaVeiculo(indice, novosDados);
    }
    }else{
        console.log('Informe um índice válido');
        return
    }
}

iniciarSistema();

