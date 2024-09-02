// Diferenças entre: NULL, UNDEFINED e UNKWON;

// NULL: É um valor que representa a ausência de valor;

let xnome:(string|null);
xnome = "Od4ir";
console.log(xnome);
xnome = null;
console.log(xnome);

// UNDEFINED: É um valor que representa a ausência de valor, mas diferente de NULL, não é possível atribuir o valor 'undefined' a uma variável; É um tipo indefinido, já que não tem nada especificado;
let ynome;  // A varíavel 'ynome' é do tipo 'any';
console.log("Ynome: ", ynome); 


// UNKWON: É um valor que representa um tipo desconhecido;
let znome:unknown;  // Unkwon só pode ser atribuido em tipos unknown ou any;
console.log("Znome:", znome);

