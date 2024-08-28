// Iremos estudar os Enumeradores;
// São conjunto de dados que podemos criar;

enum dias{
    domingo= 0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

// Formas de se utilizar o 'enum':

console.log(dias.domingo);
console.log(dias["quarta"]);
console.log(dias[3]);

const d = new Date();
console.log(d);
console.log(d.getDate());  // Dia do mẽs;
console.log(d.getDay());   // Dia da semana;

console.log(dias[d.getDay()]); 


enum cores{
    branco = "#FFFFFF",
    preto = "#000000",
    vermelho = "#FF0000",
    azul = "#0000FF",
    verde = "#00FF00",
    amarelo = "#FFFF00",
    roxo = "#800080",
    rosa = "#FFC0CB"
}

console.log(cores.branco);


// Mesmo sem os números, o TypeScript atribui automaticamente; 
// No exemplo abaixo, o TypeScript atribui 0, 1 e 2 para USER, ADMIN e SUPERUSER, respectivamente;
enum tipoUsuario{
    USER,
    ADMIN,
    SUPERUSER
}

// A variável 'tp' é do tipo 'tipoUsuario' e só pode receber os valores definidos no 'enum';
const tp:tipoUsuario = tipoUsuario.ADMIN;