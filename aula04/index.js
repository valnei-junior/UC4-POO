const { Animal} = require('./Animal');
const { Cachorro } = require('./Cachorro');

let a1 = new Animal('Rex', 5, 'Marrom');
let c1 = new Cachorro('SRD', 'Rex', 15, 'Preto');

a1.emitirSom();
c1.emitirSom();