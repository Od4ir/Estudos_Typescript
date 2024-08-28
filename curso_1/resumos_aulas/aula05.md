# Aula 5
## Como funciona o UNION TYPES:

É possível iniciar variáveis especificano o tipo delas ou dando valores iniciais. Com o uso do operador "|" (OU) é possível informar que a variável vai aceitar mais de um tipo de valor. 

Ou seja, podemos declarar uma váriavel já informando os possíveis valores que ela vai receber, sem informar uma valor para a mesma ou informar valores. No caso dos valores, se for uma lista, funciona, mas se não for, for um valor simples, a variável será entendida como daquele tipo de valor. 

Para que a variável aceite qualquer tipo de valor, usamos o tipo `any`.

```
let numbers:string;
numbers = "Dois";

let strings:number;
strings = 1;

let n = "Números";   >> O tipo de n será string;
let m = 21;          >> O tipo de m será number;

let p:any;           >> Aceita qualquer valor;
p = "Odair";
p = 1;
p = true;

let q:any[]=[]       >> q vai ser uma lista de qualquer coisa;


As duas declarações abaixo deixam q com mesmo tipo:
let q = ["Odair", 1, 2, true, "panda"];   
let q:(string|number|boolean)[]=[];
```