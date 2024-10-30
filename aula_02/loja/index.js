const { Produto } = require('./produto');
const { Pedido } = require('./pedido');

const produto1 = new Produto('Camiseta', 59.99);
const produto2 = new Produto('Calça', 89.99);
const produto3 = new Produto('Tênis', 129.99);

const pedido = new Pedido();
pedido.adicionarProduto(produto1);
pedido.adicionarProduto(produto2);

pedido.mostrarPedido();