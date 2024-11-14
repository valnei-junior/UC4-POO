const { ControllerNotebook } = require("../controllers/controllerNotebook");
const { Notebook } = require ("../models/Notebook")
const { databaseNotebook} = require('../config/databaseNotebook')

//Instanciando o controller de notebooks
const notebookController = new ControllerNotebook();

//Testando o CRUD de notebooks
// 1 Adicionando notebooks
console.log( "=== Criando Notebook === ")
notebookController.AdicionarNotebook('123456', 'Dell', 'Inspiron', 'Preto', 3500)
notebookController.AdicionarNotebook('123457', 'Dell', 'Inspiron', 'Preto', 3500)
notebookController.AdicionarNotebook('123458', 'Dell', 'Inspiron', 'Preto', 4000)


// 2 listando notebooks
console.log(" === Listando Notebooks ===" );
notebookController.listarNotebook();

// 3 buscando um notebook pelo numero de serie
console.log(" === Buscando Notebook pelo numero de série === ");
notebookController.buscarNotebook('123457')

// 4 atualizando um notebook
console.log(" === Atualizando Notebook === ");
notebookController.editarNotebook('123459', 'Dell', 'Inspiron', 'Preto', 4000);

// 5 Removendo um notebooks
console.log(" === Removendo Notebook === ");
notebookController.excluirNotebook('123454');



