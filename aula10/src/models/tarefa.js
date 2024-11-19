class Tarefas {
    #descricao;
    #status;

constructor(descricao, status) {    
    this.#descricao = descricao;
    this.#status = status;
    Object.freeze(this);
}
get getDescricao() {
    return this.#descricao;
}
get getStatus() {
    return this.#status;
}
set setDescricao(descricao) {
    this.#descricao = descricao;
}
set setStatus(status) {
    this.#status = status;
}
getInfo() {
    console.log(`Descrição: ${this.getDescricao} Status: ${this.getStatus}`);
}
finalizarTarefa() {
    this.setStatus = "Finalizada";
}
}
module.exports = { Tarefas }