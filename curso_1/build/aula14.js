"use strict";
test();
test();
test();
function test() {
    console.log("Mais um teste");
}
const test2 = (msg) => {
    console.log(msg);
};
test2("Oiii");
test2("Tchau");
test2();
const somaArray = (n) => {
    let soma = 0;
    n.forEach((i) => {
        soma += i;
    });
    return soma;
};
let arrray = [1, 4, 8, 32, 64, 128];
arrray.push(256);
let result = somaArray(arrray);
console.log(result);
