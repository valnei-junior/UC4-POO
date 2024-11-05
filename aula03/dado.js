// dado.js
class Dado {
    #face;

    constructor() {
        this.#face = Math.floor(Math.random() * 6 + 1);
        Object.freeze(this);
    }


    get getface() {
        return this.#face;
    }

    set setface(face) {
        this.#face = face;
    }
}
  
   
module.exports = { Dado };

// let dado01 = new Dado();
// console.log(dado01.getface);