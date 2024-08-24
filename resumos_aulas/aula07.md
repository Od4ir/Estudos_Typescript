# Aula 7 
## Conceito de Tuplas

Tuplas são implementadas das seguinte forma: 

```
let tupla:[string, number, boolean] = ["Odair, 21, true];

```

Podemos acessar índices da tupla e também tornar o elementos *readonly*: 


```
let tupla_readonly:readonly[string, number, number] = ["Susie", 21, 43];
tupla[0] = "Panda"; >> Vai dar ruim;

```

Em JS não existe o conceito de *readonly* em JS: