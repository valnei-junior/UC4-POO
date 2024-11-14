const { Notebook } = require('../models/Notebook') // Importa a classe Notebook

class Estoque {
    #id

    constructor(id, quantidade, produto){
        try {
            if (produtos instanceof Notebook) {
                this.#id = id;
                this.quantidade = quantidade;
                this.produto = produto;
            }
        } catch (error) {
            console.error('Erro ao adicionar produto ao estoque', error.message);
        }
        
       }
  get getId(){
      return this.#id;
  }
  set setId(novoId){
      this.#id = novoId;
  }

}
module.exports = { Estoque }; // Exporta a classe Estoque