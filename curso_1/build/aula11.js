"use strict";
let nvalor;
let svalor;
let uvalor;
uvalor = '10';
console.log(typeof (uvalor));
console.log(uvalor);
nvalor = uvalor;
nvalor += 10;
console.log(typeof nvalor);
console.log(nvalor);
svalor = uvalor;
svalor += 10;
console.log(typeof svalor);
console.log(svalor);
svalor = '21';
nvalor = svalor;
nvalor += 10;
console.log(typeof nvalor);
console.log(nvalor);
svalor = '42';
nvalor = Number.parseInt(svalor);
nvalor += 10;
console.log(typeof nvalor);
console.log(nvalor);
nvalor = 42;
svalor = nvalor.toString();
svalor += ' é um número';
console.log(typeof svalor);
console.log(svalor);
