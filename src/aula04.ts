// nome_n está tipado como string, logo não aceita valores diferentes de string;

let nome_m = "Odair"; // Tipo 'string'

// Em JS, o tipo da variável pode ser alterado, mas em TS, que tem tipagem estática
// isso não é possível;

// É possível especificar o tipo da variável, como no exemplo abaixo:

let nome_n:string;
nome_n = "Od4ir";

// Tipagem do tipo number:

let valor = 0; // Int, Float, Bin, Hex -> Number

// Tipagem do tipo qualquer, sem inicialização de valor:

let coisas;    // Tipo 'any'


 