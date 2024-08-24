let pessoas=[];  // Tipo 'any'

let nomes=["Odair", "Susie", "Chloe"]; // Tipo 'string'

nomes.push("Panda"); // Adiciona um novo elemento ao array do tipo string;
// nomes.push(1); // Gera um erro, já que o array é do tipo string;
console.log(nomes);


let series:string[] = []; // Array do tipo string definido;



// Tipagem de arrays com múltiplos tipos:

// Varíavel aceita diferentes tipos de valores:

let valor_x:string|number;
valor_x = "Odair";
console.log(valor_x);
valor_x = 1;
console.log(valor_x);

// Varíavel de qualquer tipo:

let valor_y:any;

valor_y = true;
valor_y = 1;
valor_y = "Odair";
valor_y = series;

// Inicializando um vetor com diferentes tipos de valores:

// let valores:(string|number)[] = []; // A mesma coisa de já iniciar como foi inicializado na linha abaixo;:
let valores = ["Odair", 1, "Susie", 2];  // Array do tipo string e number;



