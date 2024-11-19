const { Tarefas } = require('../models/tarefa');

class TarefasProfissionais extends Tarefas {
    #prioridade;
    #data;

    constructor (prioridade, data, status){
        super(descricao, status);
        this.#prioridade = prioridade;
        this.#data = data;
        Object.freeze(this);
    }
    get getPrioridade(){
        return this.#prioridade;
    }
    get getData(){
        return this.#data;
    }
    set setPrioridade(prioridade){
        this.#prioridade = prioridade;
    }
    set setData(data){
        this.#data = data;
    }
    getInfo(){
        console.log(`Descrição: ${this.getDescricao} Status: ${this.getStatus} Prioridade: ${this.getPrioridade} Data: ${this.getData}`);
    }
}
module.exports = { TarefasProfissionais }