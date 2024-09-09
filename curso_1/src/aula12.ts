// O tipo void é usado para funções que não retornam nada;
function teste():void {
    console.log('teste');
}

teste();

// É importante especificar os tipos dos parâmetros e do retorno da função;
function logar(user:string, paswd:string):void {
    console.log(`User: ${user} Pass: ${paswd}`);
}

logar('Od4ir', '424242');

function soma2(n1:number, n2:number):number {
    return n1 + n2;
}

const resultado:number = soma2(12, 30);
console.log(resultado);



