# Aula 4
## Type Inference em TS


### Compilação Automática:
Comando *watch*:

```bash
tsc --watch 
```

O modo *watch* obversa todas as mudanças nos arquivos do `/src` e compila automaticamente para a pasta `/build` se não houver erros. 

### Tipagem:

Se há declarem de valor numa variável, o tipo de variável será inferido automaticamente:

```
let odair = "nome"
```

No exemplo acima, o tipo de string é inferido pelo TS;