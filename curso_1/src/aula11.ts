let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor='10';

console.log(typeof(uvalor));   // number
console.log(uvalor);

// nvalor = uvalor; // Não é possível atribuir um valor do tipo 'unknown' a um tipo 'number';

nvalor = uvalor as number; 
// OU nvalor = <number>uvalor;  
// É possível fazer a conversão de tipos; Porém, como o valor é uma string, o tipo do nvalor ao ser printado será string e as operações aritméticas serão feitas como string;
nvalor += 10;
console.log(typeof nvalor);   // string
console.log(nvalor);          // 1010


svalor = uvalor as string;  
// OU svalor = <string>uvalor;

svalor += 10;
console.log(typeof svalor);  // string
console.log(svalor);         // 1010

svalor = '21';
nvalor = <number><unknown>svalor;  
// Para fazer a atribuição entre diferentes, pode se usar o unknown, mas o valor de nvalor será string;

nvalor += 10;
console.log(typeof nvalor);
console.log(nvalor);

// Para converter para um valor número, é possível usar a interface Number:

svalor = '42';
nvalor = Number.parseInt(svalor);
nvalor += 10;
console.log(typeof nvalor);
console.log(nvalor);

// O contrário também é possível:

nvalor = 42;
svalor = nvalor.toString();
svalor += ' é um número';
console.log(typeof svalor);
console.log(svalor);