class engenho {
    #nome;
    #capacidadeMaxima;
    #gerarRelatorio;


    constructor(nome, capacidadeMaxima, gerarRelatorio) {
        this.#nome = nome;
        this.#capacidadeMaxima = capacidadeMaxima;
        this.#gerarRelatorio = gerarRelatorio;
        this.#producaoDiaria = [];
        Object.freeze(this);
    }

    get getnome() {
        return this.#nome;
    }
    get getcapacidadeMaxima() {
        return this.#capacidadeMaxima;
    }
    get getgerarRelatorio() {
        return this.#gerarRelatorio;
    }
    set setnome(nome) {
        this.#nome = nome;
    }
    set setcapacidadeMaxima(capacidadeMaxima) {
        this.#capacidadeMaxima = capacidadeMaxima;
    }
    set setgerarRelatorio(gerarRelatorio) {
        this.#gerarRelatorio = gerarRelatorio;
    }
    registrarProducao(data, quantidade) {
        try {
            const producao = new registrarProducao (data, quantidade );
            
            this.producaoDiaria.push(producao);
            console.log("Nome: ${this.getnome}, Capacidade Máxima: ${this.getcapacidadeMaxima}, Tipo de Farinha: ${this.gettipoFarinha}");
        
        } catch (error) {
            console.log('Erro ao registrar produção.', error.message);
            
        }
        this.gerarRelatorio();
        try {
            const producao =new gerarRelatorio ( data, quantidade );
            this.producaoDiaria.push(producao);
            
            console.log(producao);
        } catch (error) {
            console.log('Erro ao Gerar Relátorio.', error.message);
            
        }

    }

    }

module.exports = engenho;