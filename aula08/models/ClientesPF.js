const { ClientesPF } = require('../models/clientePF');
   
    
class ClientesPF extends Cliente {
      #CPF;
      
     constructor(nome, dataNascimento, telefone, email, CPF){
          super(nome, dataNascimento, telefone, email);
          this.#CPF = CPF;
          Object.freeze(this); // Congela o objeto
     }
    
     get getCPF() {
          return this.#CPF;
     }
     set setCPF(CPF) {
          this.#CPF = CPF;
     }
    }
    module.exports = { ClientesPF }; // Exporta a classe ClientesPF
