# Aula 6
## Mais sobre Array e Readonly Array

O **Array** do TS inclui vários métodos que permitem adicionar, remover e modificar os elementos do array. No entando, existe um tipo de array que é somente para leitura, que bloqueia esse tipo de operações.

A declaração é feita da seguinte forma, veja os exemplos:

```
let numeros_readonly:ReadonlyArray<number> = []

let strings_readonly:ReadonlyArray<string> = ["Odair", "Susie", "Chloe"];

let varias_coisas_readonly:ReadonlyArray<string|number> = ["Odair", 1, "Susie", 2];

let mais_varias_coisas_readonly:ReadonlyArray<any> = [];

```
