// Arrow Function:

// Cria-se uma função anônima e atribui-se a uma variável;


test();
test();
test();

// Podemos chamar a função mesmo antes de sua declaração, pois o JS carrega todas as funções antes de executar o código;
function test():void {
    console.log("Mais um teste")
}

// test2(); // Mas isso não funciona para arrow function;

const test2 = (msg?:string):void => {
    console.log(msg)
}

test2("Oiii");
test2("Tchau");
test2();   // undefined;



const somaArray=(n:number[]):number => {
    let soma:number = 0;
    n.forEach((i) => {
        soma += i;          
    });
    return soma;
}

let arrray:number[] = [1, 4, 8, 32, 64, 128];
arrray.push(256);
let result:number = somaArray(arrray);

console.log(result);



