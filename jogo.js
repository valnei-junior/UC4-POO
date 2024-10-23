class Jogos {
    
    constructor(titulo, genero, anoDeLançamento) {
       this.titulo = titulo;
       this.genero = genero;
       this.anoDeLançamento = anoDeLançamento;
    }
    getTitulo() {
        return this.titulo;
    }
    getGenero() {
        return this.genero;
    }
    getAnoDeLançamento() {
        return this.anoDeLançamento;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setAnoDeLançamento(anoDeLançamento) {
        this.anoDeLançamento = anoDeLançamento;
    }
    exibirJogo() {
        console.table(
            {
                "Título": this.titulo,
                "Gênero": this.genero,
                "Ano de Lançamento": this.anoDeLançamento
            }
        );
    }
}
let jogo1 = new Jogos("The Last of Us", "Ação/Aventura", 2013);
let jogo2 = new Jogos("God of War", "Ação/Aventura", 2018);
let jogo3 = new Jogos("Uncharted 4", "Ação/Aventura", 2016);

console.log(jogo1);

console.log(jogo1.titulo);
console.log(jogo2.titulo);
console.log(jogo3.titulo);

console.log(jogo1.getTitulo());
console.log(jogo1.getGenero());
console.log(jogo1.getAnoDeLançamento());

jogo1.exibirJogo();
jogo2.exibirJogo();
jogo3.exibirJogo();
