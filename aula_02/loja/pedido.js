const {Produto} = require('./produto');

class Pedido {
    
        #produtos 
        constructor() {
        this.#produtos = [];
        Object.freeze(this);
    }

    adicionarProduto(produto) {
        if (produto instanceof Produto) {
            this.#produtos.push(produto);
        }else{
            console.log('Somente objetos do tipo Produto podem ser adicionados ao pedido');
        }

    }

    mostrarPedido() {
        console.log('Detalhes do Pedido:');
        this.#produtos.forEach (produto => {
            console.log(produto.getInfoProduto());
        });
    }
}
module.exports = {Pedido};