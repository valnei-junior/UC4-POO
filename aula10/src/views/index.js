const prompt = require('prompt-sync')();
const { TarefasController } = require('../controllers/tarefasController');

const controller = new TarefasController();

function iniciarSistema(){
    let opcao;
    do{
        console.log(' === Sistema de Gerenciamento de Tarefas ===');
        console.log('1 - Adicionar Tarefa');
        console.log('2 - Listar Tarefas');
        console.log('3 - Editar Tarefa');
        console.log('4 - Excluir Tarefa');
        console.log('0 - Sair');
        opcao = prompt('Escolha uma opção: (0 á 4) ');

        switch(opcao){
            case '0':
                console.log('Saindo do sistema...');
                break;
            case '1':
                adicionarTarefa();
                break;
            case '2':
                controller.Listartarefas();
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                excluirTarefa();
                break;
            default:
                console.log('Opção inválida');
        }
    }while(opcao !== '0');
}
    function adicionarTarefa(){
        const descricao = prompt('Informe a descrição da tarefa: ');
        const status = prompt('Informe o status da tarefa: ');
        const tipo = prompt('Informe o tipo da tarefa (Pessoal, Profissional ou Tarefa): ');
        const prioridade = prompt('Informe a prioridade da tarefa: ');
        const data = prompt('Informe a data da tarefa: ');

        controller.Adicionartarefas(descricao, status, tipo, prioridade, data);
    }
    iniciarSistema();

    function editarTarefa(){
        controller.Listartarefas();
        const indice = parseInt(prompt('Informe o índice da tarefa que deseja editar: '));
        const result = controller.BuscarId(indice);

        if (result){
            const descricao = prompt('Informe a descrição da tarefa: ');
            const status = prompt('Informe o status da tarefa: ');
            const prioridade = prompt('Informe a prioridade da tarefa: ');
            const data = prompt('Informe a data da tarefa: ');

            controller.Editartarefas(indice, {descricao, status, prioridade, data});
        }else{
            console.log('Tarefa não encontrada');
        }
    }
    iniciarSistema();