const { Tarefas } = require('../models/tarefa');
const { TarefasPessoais } = require('../models/tarefas_pessoais');
const { TarefasProfissionais } = require('../models/tarefas_profissionais');

const bancoTarefas = [];

class TarefasController {

    Adicionartarefas (descricao, status, tipo, prioridade, data){

        let tarefa;
        if (tipo.toLowerCase() === 'pessoal'){
            tarefa = new TarefasPessoais(descricao, status, prioridade, data);
        }else if(tipo.toLowerCase() === 'profissional'){
            tarefa = new TarefasProfissionais(descricao, status, prioridade, data);
        }else if(tipo.toLowerCase() === 'tarefa'){
            tarefa = new tarefas(descricao, status);
        }else{
            console.log('Tipo de tarefa inválido');
            return;
        }
        bancoTarefas.push(tarefa);
        console.log('Tarefa criada com sucesso!!!');
    }


    Listartarefas(){
        if (bancoTarefas.length > 0){
            console.log(' === Tarefas Registradas ===');
            bancoTarefas.forEach((tarefa, index) => {
                console.log(`Tarefa ${index + 1}`);
                tarefa.getInfo();
            });
        } else{
            console.log('Nenhuma tarefa registrada');
        }
    }
    BuscarId(indice){
        if (bancoTarefas.length >= indice >1){
            return true;
        }
        return false;
    }

    Editartarefas(indice, novosDados){
        const novaTarefa = bancoTarefas[indice -1];
        if (novosDados.descricao){
            novaTarefa.setDescricao = novosDados.descricao;
        }
        if (novosDados.status){
            novaTarefa.setStatus = novosDados.status;
        }
        if (novosDados.prioridade){
            novaTarefa.setPrioridade = novosDados.prioridade;
        }
        if (novosDados.data){
            novaTarefa.setData = novosDados.data;
        }
        console.log('Tarefa editada com sucesso!!!');
    }

    Editartarefas(indice){
        const novaTarefa = bancoTarefas[indice -1];
        novaTarefa.finalizarTarefa();
        console.log('Tarefa finalizada com sucesso!!!');
    }
    ExcluirTarefa(indice){
        bancoTarefas.splice(indice -1, 1);
        console.log('Tarefa excluída com sucesso!!!');
    }

}
module.exports = { TarefasController }