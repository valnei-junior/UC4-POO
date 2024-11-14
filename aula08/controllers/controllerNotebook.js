const { databaseNotebook } = require('../config/databaseNotebook') // Importa o banco de dados de notebooks
const { Notebook } = require('../models/Notebook') // Importa a classe Notebook

class ControllerNotebook { // Cria a classe controllerNotebook
    AdicionarNotebook(numeroDeSerie, marca, modelo, cor, preco) { // Adiciona um notebook
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco) // Cria um novo notebook

            databaseNotebook.push(novoNotebook) // Adiciona o novo notebook ao banco de dados
            console.log('Notebook adicionado com sucesso!') // Exibe a mensagem de notebook adicionado com sucesso
            return novoNotebook // Retorna o novo notebook

        } catch (error) { // Se ocorrer um erro
            console.error('Erro ao adicionar notebook', error.mensage); // Exibe a mensagem de erro
        }
    }
    listarNotebook() { // Lista os notebooks
        try {
            const notebook = databaseNotebook.map(notebook => ({ // Mapeia a lista de notebooks 
                numeroDeSerie: notebook.getNumeroDeSerie, // Retorna o número de série do notebook
                marca: notebook.marca, // Retorna a marca do notebook
                modelo: notebook.modelo, // Retorna o modelo do notebook
                cor: notebook.cor,// Retorna a cor do notebook
                preco: notebook.getPreco // Retorna o preço do notebook

            }));
            console.table(notebook) // Exibe a lista de notebooks

        } catch (error) { // Se ocorrer um erro
            console.log('Erro ao listar notebook', error.mensage);  // Exibe a mensagem de erro
        }
    }
    buscarNotebook(numeroDeSerie) { // Busca um notebook pelo número de série
        try {
            const notebook = databaseNotebook.find(n=> n.getNumeroDeSerie === numeroDeSerie) // Busca o notebook pelo número de série
            if (!notebook) {     // Se o notebook for encontrado
                console.log("Notebook não encontrado!", numeroDeSerie) // Exibe a mensagem de notebook não encontrado
                return; // Retorna a mensagem de notebook não encontrado
            }
            console.log('Notebook encontrado com sucesso!') // Exibe a mensagem de notebook encontrado
            console.table([notebook]); // Exibe o notebook encontrado
            return notebook; // Retorna o notebook encontrado   

        } catch (error) { // Se ocorrer um erro
            console.log('Erro ao buscar notebook', error.mensage); // Exibe a mensagem de erro
        }
    }

        editarNotebook(numeroDeSerie, novaMarca, novoModelo, novaCor, novoPreco){ // Edita um notebook  
            try {
                const notebook = this.buscarNotebook(numeroDeSerie);
                if (notebook) {
                    notebook.marca = novaMarca;
                    notebook.modelo = novoModelo;
                    notebook.cor = novaCor;
                    notebook.setPreco = novoPreco;
                    return notebook;
                }

            } catch (error) {
                console.error("Erro ao atualizar notebook:", error.message);
            }
        }
        excluirNotebook(numeroDeSerie){
            try {
                const notebook = this.buscarNotebook(numeroDeSerie);
                if (notebook) {
                    const index = databaseNotebook.findINdex(n => n.getNumeroDeSerie === numeroDeSerie);
                    const notebookRemovido = databaseNotebook.splice(index, 1);
                    confirm("Notebook excluído com sucesso!", notebookRemovido);
                    return notebookRemovido;
                }
            } catch (error) {
                console.error("Erro ao excluir notebook:", error.message);
            }
        }

        excluirTodosNotebook(){
            try {
                if (databaseNotebook.length > 0) {
                    databaseNotebook.length = 0;
                }
            }catch(error) {
            console.error("Erro ao excluir todos os notebooks:", error.message);
        }
}
 
}
module.exports = { ControllerNotebook }