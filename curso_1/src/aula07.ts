// Tupla com dois elementos, onde o primeiro é do tipo string e o segundo do tipo number;
let things:[string, number]=["Panda", 10]; 
console.log(things);

// Na impressão, é possivel indicar índices:
console.log(things[0]);
console.log(things[1]);


let things2:[string, number, boolean]=["Susie", 20, true];
console.log(things2);

things2.push(false);
console.log(things2);
// console.log(things2[3]);  // ERRO: Não tem o índice 3, apesar do push funcionar;


let things3:readonly[string, number, boolean]=["Chloe", 30, false];
// things3.push(true); // ERRO: Gera um erro, já que o array é do tipo readonly;
// things3[0] = "Chloes"; // ERRO: Gera um erro, já que o array é do tipo readonly;
console.log(things3);