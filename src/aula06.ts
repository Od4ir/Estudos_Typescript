
// Formas de declarar um array de números:
let numeros:number[] = [1, 2, 3, 4, 5]; // Array do tipo number; 
let numeros1:Array<number> = [1, 2, 3, 4, 5]; // Array do tipo number;


numeros.pop(); // Remove o último elemento do array;
console.log(numeros);
numeros.push(21); // Adiciona um novo elemento ao array ao final;
console.log(numeros);
numeros.unshift(100); // Adiciona um novo elemento ao array no início;
console.log(numeros);
numeros.shift(); // Remove o primeiro elemento do array;
console.log(numeros);


// No array acima, podemos fazer diferentes operações no array;
// Podemos, entretanto, fazer um Array Readonly, onde não podemos fazer alterações no array. 
// Esse tipo de array bloqueia as operações de adicionar, remover e alterar elementos do array;

let numeros_readonly:ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numeros_readonly.push(10); // Gera um erro, já que o array é do tipo ReadonlyArray;

let strings_readonly:ReadonlyArray<string> = ["Odair", "Susie", "Chloe"];

let varias_coisas_readonly:ReadonlyArray<string|number> = ["Odair", 1, "Susie", 2];

let mais_varias_coisas_readonly:ReadonlyArray<any> = [];