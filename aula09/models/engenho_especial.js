class engenho_especial {

    #nome;
    #capacidadeMaxima;
    #tipoFarinha;


    constructor(nome, capacidadeMaxima, tipoFarinha) {
        this.#nome = nome;
        this.#capacidadeMaxima = capacidadeMaxima;
        this.#tipoFarinha = tipoFarinha;
        this.producaoDiaria = [];
    }
    get getnome() {
        return this.#nome;
    }
    get getcapacidadeMaxima() {
        return this.#capacidadeMaxima;
    }
    get gettipoFarinha(){
        return this.#tipoFarinha;
    }
    set setnome(nome) {
        this.#nome = nome;
    }
    set setcapacidadeMaxima(capacidadeMaxima) {
        this.#capacidadeMaxima = capacidadeMaxima;
    }
    set settipoFarinha(tipoFarinha){
        this.#tipoFarinha = tipoFarinha;
    }
    

    registrarProducao(data, quantidade) {
        if (quantidade > this.capacidadeMaxima) {
            console.log("Quantidade excede a capacidade máxima do engenho.");
            return;
        }
        this.producaoDiaria.push({ data, quantidade });
    }

    gerarRelatorio() {
        console.log(`Relatório de Produção - Tipo de Farinha: ${this.tipoFarinha}`);
        this.producaoDiaria.forEach((registro) => {
            console.log(`Data: ${registro.data}, Quantidade: ${registro.quantidade}`);
        });
    }
}
module.exports = engenho_especial;