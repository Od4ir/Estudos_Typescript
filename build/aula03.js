"use strict";
class Pessoa {
    nome = null;
    sobrenome = null;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
let od = new Pessoa("Odair", "Gonçalves");
console.log(od.nome);
console.log(od.sobrenome);
