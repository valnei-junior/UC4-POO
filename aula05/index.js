const {Animal} = require('./animal');
const {Ave} = require('./ave');
const {mamifero} = require('./mamifero');

let animal1 = new Animal('Rex', 5);
let cachorro1 = new mamifero('Rex', 5,"labrador", "casa");
let ave1 = new Ave('Piu', 2, 'Curvo', 'Alta');

animal1.getInfo();
animal1.emitirSom();

cachorro1.getInfo();
cachorro1.emitirSom();

ave1.getInfo();
ave1.emitirSom();



