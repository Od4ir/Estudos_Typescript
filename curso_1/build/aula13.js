"use strict";
function soma(a = 10, b = 32) {
    return a + b;
}
console.log(soma());
console.log(soma(32));
function novoUser(user, pass, nome) {
    console.log('User: ', user);
    console.log('Pass: ', pass);
    if (nome) {
        console.log('Nome: ', nome);
    }
}
novoUser("Odair", "424242");
novoUser("Odair", "424242", "Od4ir Gonçalves");
