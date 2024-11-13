class Cliente {
    nome; // Atributo público
    dataNascimento; // Atributo público
    telefone; // Atributo público
    #email; // Atributo privado

  constructor(nome, dataNascimento, telefone, email) {
   
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.telefone = telefone;
    this.#email = email;
    
  }

  get getEmail() {
    return this.#email;
  }
  set setEmail(email) {
    this.#email = email;
  }

}

module.exports = {Cliente}; // Exporta a classe Cliente
