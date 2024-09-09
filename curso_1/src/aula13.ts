function soma(a: number=10, b: number=32): number {
    return a + b;   
}

console.log(soma());
console.log(soma(32));

function novoUser(user:string, pass:string, nome?:string):void {
    console.log('User: ', user);
    console.log('Pass: ', pass);
    if (nome) {
        console.log('Nome: ', nome);
    }
}

novoUser("Odair", "424242");
novoUser("Odair", "424242", "Od4ir Gonçalves");