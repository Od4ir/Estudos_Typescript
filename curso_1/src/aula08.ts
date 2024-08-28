
// O tipo da variável vem direto da atribuição, não da declaração;
let dados:object = {
    nome: "Porquinho",
    idade: 5,
    status:"Feliz"
};

console.log(typeof dados);
console.log(dados);

// Os dados2 também tem tipo objeto, sem a atribuição de tipo;

let dados2 = {
    nome: "Porquinho",
    idade: 5,
    status:"Feliz"
};

console.log(typeof dados2);
console.log(dados2);

// Para operar com um atributo especifico, basta usar o '.':
console.log(dados2.nome);
dados2.idade = 6;
console.log(dados2.idade);

// Usa-se object geralmente para passar um conjunto de informações como parâmetro para uma função;
// É possível criar funções dentro de objetos;

let dados3 = {
    nome: "Cavalo",
    idade: 6,
    status:"Animado",
    latir:()=>console.log("Au au"),
    info:(parametro:string)=>console.log(parametro)
};

dados3.latir();
dados3.info("Olá mundo!");

