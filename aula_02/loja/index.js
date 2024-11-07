const prompt = require('prompt-sync')(); // Importa a função prompt-sync

const { Produto } = require('./produto'); // Importa a classe Produto
const { Pedido } = require('./pedido');  // Importa a classe Pedido

function adicionarProdutosAoPedido(){  // Função para adicionar produtos ao pedido
    const pedido = new Pedido();  // Instancia um novo pedido
    while (true) {               // Loop infinito

        const nome = prompt('Digite o nome do produto (ou "sair" para finalizar) '); // Solicita o nome do produto
        if (nome.toLowerCase() === 'sair')  // Verifica se o usuário digitou "sair"
            break;                      // Encerra o loop

        const preco = parseFloat(prompt('Digite o preço do produto: ')); // Solicita o preço do produto
        if(isNaN(preco) || preco <= 0){  // Verifica se o preço é inválido
            console.log('Preço inválido. Tente novamente.'); // Exibe uma mensagem de erro
            continue;                      // Reinicia o loop
        }
        const produto = new Produto(nome, preco); // Instancia um novo produto
        pedido.adicionarProduto(produto);         // Adiciona o produto ao pedido
        console.log (`Produto "${produto.getNome}" Produto adicionado com sucesso!`); // Exibe uma mensagem de sucesso
    }
    pedido.mostrarPedido(); // Exibe o pedido
}
adicionarProdutosAoPedido(); // Chama a função para adicionar produtos ao pedido

// const produto1 = new Produto('Camiseta', 59.99);
// const produto2 = new Produto('Calça', 89.99);
// const produto3 = new Produto('Tênis', 129.99);

// const pedido = new Pedido();
// pedido.adicionarProduto(produto1);
// pedido.adicionarProduto(produto2);

// pedido.mostrarPedido();