
// Aula 2.1 - Atributos


// class Aluno{
//     nome, // Atributo público
//     idade, // Atributo público
// }
// constructor(nome, idade){ // Método criação de objetos
//     this.nome = nome;
//     this.idade = idade;
// }
// getNome(){ // Método de acesso
//     return this.nome;
// }
// setNome (nome){ // Método de modificação
//     this.nome = nome;
// }


// ----------------------------------------------------------------------------------------------------------------------------

// Construção de um sistema orientado a objetos para manipulação de pedidos e produtos.

// classes:
// Produto
// -atributos: nome e preço
// métodos: getInfoProduto() : retornar o nome e o preço do produto
// getNome, setNome, getPreco, setPreco

// Pedido:
// -atributos:produtos[]
// métodos:
// adicionarProduto(produto) adiciona um novo produto ao pedido
// calcularTotal() retorna o total do pedido.
// mostrarPedido() retorna o detalhe de todos os produtos

// index:
// instanciar os objetos do tipo produto e do tipo pedido

// --------------------------------------------------------------------------------
class produto {
    constructor (nome, produto) {
        this.nome = nome
        this.produto = produto
    }
    getInfoProduto() {
        return `Nome: ${this.nome}, Preço: R$${this.preco}`;
    }
}

