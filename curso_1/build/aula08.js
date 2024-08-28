"use strict";
let dados = {
    nome: "Porquinho",
    idade: 5,
    status: "Feliz"
};
console.log(typeof dados);
console.log(dados);
let dados2 = {
    nome: "Porquinho",
    idade: 5,
    status: "Feliz"
};
console.log(typeof dados2);
console.log(dados2);
console.log(dados2.nome);
dados2.idade = 6;
console.log(dados2.idade);
let dados3 = {
    nome: "Cavalo",
    idade: 6,
    status: "Animado",
    latir: () => console.log("Au au"),
    info: (parametro) => console.log(parametro)
};
dados3.latir();
dados3.info("Olá mundo!");
