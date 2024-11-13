const {databaseNotebook} = require('../config/databaseNotebook')
const { Notebook } = require('../models/Notebook')

class controllerNotebook {
    AdicionarNotebook(  numeroDeSerie, marca, modelo, cor, preco ){
        try {
            const notebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco)
            databaseNotebook.push(novoNotebook)
            console.log('Notebook adicionado com sucesso!')
            return novoNotebook

        } catch (error) {
            console.log('Erro ao adicionar notebook', error.mensage);
        }
    }
    listarNotebook(){
        try {
            const notebook = databaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.Marca,
                modelo: notebook.Modelo,
                cor: notebook.Cor,
                preco: notebook.getPreco
                
            }));
            console.table (notebook)

        }catch (error) {
            console.log('Erro ao listar notebook', error.mensage);
        }
    }
    editarNotebook(){
        try {
            
        } catch (error) {
        }
    }
    excluirNotebook(numeroDeSerie){
        try {
            
        } catch (error) {
            
        }
    }
    excluirTodosNotebook(){
        try {
            
        } catch (error) {
            
        }
    }
}
module.exports = { controllerNotebook }