const {Produto} = require('./produto'); // Importa a classe Produto

class Pedido {  // Classe Pedido
    
        #produtos  // Atributo produtos
        constructor() {  // Método construtor
        this.#produtos = [];// Atributo produtos
        Object.freeze(this);// Congela o objeto
    }

    adicionarProduto(produto) { // Método de adição de produtos
        if (produto instanceof Produto) { // Verifica se o objeto é do tipo Produto
            this.#produtos.push(produto);  // Adiciona o produto ao array de produtos
        }else{
            console.log('Somente objetos do tipo Produto podem ser adicionados ao pedido'); // Exibe uma mensagem de erro
        }
    } // Método de exibição do pedido

    mostrarPedido() {   // Método de exibição do pedido
        console.log('Detalhes do Pedido:');  // Exibe uma mensagem
        this.#produtos.forEach (produto => {  // Percorre o array de produtos
            console.log(produto.getInfoProduto()); // Exibe as informações do produto
        });
        console.log (`Total = ${this.calcularTotal()}`) // 
    }
    calcularTotal() { // Método de cálculo do total do pedido
      return this.#produtos.reduce((total, produto) => total + produto.getPreco, 0); // Calcula o total do pedido
    }
}
module.exports = {Pedido}; // Exporta a classe Pedido