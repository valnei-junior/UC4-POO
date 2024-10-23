//COMO INICIAR

class Pessoa {
    // nome;
    // rg;
    // cpf;
    // idade;
    // sexo;
    // nacionalidade;
    // estadoCivil; 

    constructor (nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }

    //metodos para retornar os valores dos atributos
    getNome() {
        return this.nome;
    }
    getRg() {
        return this.rg;
    }
    getCpf() {
        return this.cpf;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
    getNacionalidade() {
        return this.nacionalidade;
    }
    getEstadoCivil() {
        return this.estadoCivil;
    }

    //metodos para alterar os valores dos atributos
    setNome(nome) {
        this.nome = nome;
    }
    setRg(rg) {
        this.rg = rg;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    setNacionalidade(nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
    setEstadoCivil(estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    exibirDados() { //metodo para exibir todos os dados da pessoa personalizado
        console.table(
                   
            `
        Dados Pessoais \n    
        Rg: ${this.rg}, 
        Cpf: ${this.cpf}, 
        Idade: ${this.idade}, 
        Sexo: ${this.sexo}, 
        Nacionalidade: ${this.nacionalidade}, 
        EstadoCivil: ${this.estadoCivil}, 

        `
        )
}
}
let pessoa01 = new Pessoa('Maria', '1234567', '123.456.789-10', 25, 'Feminino', 'Brasileira', 'Solteira');
console.log(pessoa01); //Exibir todos os dados da pessoa

console.log(pessoa01.nome); //Exibir o nome da pessoa
console.log(pessoa01.getNome()); //Exibir o nome da pessoa

pessoa01.setNome('João'); //Alterar o nome da pessoa
console.log(pessoa01.getNome()); //Exibir o nome da pessoa alterado

pessoa01.exibirDados(); //Exibir todos os dados da pessoa