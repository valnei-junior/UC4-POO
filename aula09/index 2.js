class Engenho {
    constructor(nome, capacidadeMaxima) {
        this.nome = nome;
        this.capacidadeMaxima = capacidadeMaxima;
        this.registroProducao = [];
    }

    registrarProducao(data, quantidade) {
        if (quantidade > this.capacidadeMaxima) {
            console.log('Quantidade excede a capacidade máxima do engenho.');
            return;
        }
        this.registroProducao.push({ data, quantidade });
    }

    gerarRelatorio() {
        console.log(`Relatório de Produção do Engenho: ${this.nome}`);
        this.registroProducao.forEach((registro, index) => {
            console.log(`${index + 1}. Data: ${registro.data}, Quantidade: ${registro.quantidade}`);
        });
    }
}

class EngenhoEspecial extends Engenho {
    constructor(nome, capacidadeMaxima) {
        super(nome, capacidadeMaxima);
    }

    registrarProducao(data, quantidade) {
        if (quantidade > this.capacidadeMaxima) {
            console.log('Quantidade excede a capacidade máxima do engenho especial.');
            return;
        }
        this.registroProducao.push({ data, quantidade });
    }

    gerarRelatorio() {
        console.log(`Relatório de Produção do Engenho Especial: ${this.nome}`);
        this.registroProducao.forEach((registro, index) => {
            console.log(`${index + 1}. Data: ${registro.data}, Quantidade: ${registro.quantidade}`);
        });
    }
}

// Exemplo de uso
const engenho1 = new Engenho('Engenho 1', 1000);
engenho1.registrarProducao('2023-10)', 500);
