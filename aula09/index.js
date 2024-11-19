class Engenho {
    constructor(nome,capacidadeMaxima, tipoFarinha) {
        this.nome = nome;
        this.capacidadeMaxima = capacidadeMaxima;
        this.tipoFarinha = tipoFarinha;
        this.producaoDiaria = [];
    }

    registrarProducao(data, quantidade) {
        if (quantidade > this.capacidadeMaxima) {
            console.log("Quantidade excede a capacidade máxima do engenho.");
            return;
        }
        this.producaoDiaria.push({ data, quantidade });
    }

    gerarRelatorio() {
        console.log(`Relatório de Produção - Tipo de Farinha: ${this.tipoFarinha}`);
        this.producaoDiaria.forEach((registro) => {
            console.log(`Data: ${registro.data}, Quantidade: ${registro.quantidade}`);
        });
    }
}

class EngenhoEspecial extends Engenho {
    constructor(capacidadeMaxima, tipoFarinha, tipoEspecial) {
        super(capacidadeMaxima, tipoFarinha);
        this.tipoEspecial = tipoEspecial;
    }

    gerarRelatorio() {
        console.log(`Relatório de Produção Especial - Tipo de Farinha: ${this.tipoFarinha}, Tipo Especial: ${this.tipoEspecial}`);
        this.producaoDiaria.forEach((registro) => {
            console.log(`Data: ${registro.data}, Quantidade: ${registro.quantidade}`);
        });
    }
}

// Exemplo de uso
const engenho = new Engenho(1000, "Trigo");
engenho.registrarProducao("2023-10-01", 500);
engenho.registrarProducao("2023-10-02", 700);
engenho.gerarRelatorio();

const engenhoEspecial = new EngenhoEspecial(1500, "Milho", "Orgânico");
engenhoEspecial.registrarProducao("2023-10-01", 800);
engenhoEspecial.registrarProducao("2023-10-02", 1200);
engenhoEspecial.gerarRelatorio();