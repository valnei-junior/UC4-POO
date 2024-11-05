class Conta { // Classe Conta
    #saldo;
    constructor(saldoInicial) { // Método construtor
        this.#saldo = saldoInicial;// Atributo saldo
        Object.freeze(this); // Congela o objeto
    }
    depositar(valor) {  // Método de
        if (valor >= 0) {
            this.#saldo += valor;
        }

    }
    sacar(valor) {// Método de saque
        if (valor >= 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }
    get getSaldo() {   // Método de acesso ao saldo
        return this.#saldo;

    }
}

const c1 = new Conta(500); // Criação de um objeto da classe Conta
c1.depositar(500); // Deposita 500 no objeto c1
console.log(c1.getSaldo); // Exibe o saldo do objeto c1
c1.sacar(100); // Saca 100 do objeto c1
console.log(c1.saldo) //não é possível acessar o saldo diretamente
console.log(c1.getSaldo); // É possivel  o saldo do objeto c1


// c1.saldo = 50000; // Altera o saldo do objeto c1
// console.log(c1.saldo); // Exibe o saldo do objeto c1

