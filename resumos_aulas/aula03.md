# Aula 3
## Arquivo de configurações

### Escolha da versão do JS:

Quando compilamos o arquivo .ts para uma versão em .js que será rodada, podemos especificar a versão do JS que queremos utilizar:


```bash
tsc nome_do_programa.ts --target "ES2016"
```

Ou, para utilizar a última versão:

```bash
tsc nome_do_programa.ts -t "ESNEXT"
```

### Arquivo de Configurações:
Para saber todas as possibilidades de flags do `tsc` digite:
```bash
tsc -h
```

É possível criar um arquivo de confirgurações para facilitar as configurações de compilação do arquivo. Para fazer isso, o comando é:

```bash
tsc --init
```
Esse comando cria um arquivo tsconfig.json para determinar as configurações de compilação e outras importantes. 

No arquivo de configurações podemos mudar por exemplo:

```
14. "target": "ESNext",

33. "rootDirs": ["./src],     >> Onde ficarão os arquivos TS

58. "outDir": "./build",      >> Vai direcionar os arquivos JS p/ essa pasta;
59. "removeComments": true,
```
Para compilar tudo de uma vez só, basta digitar `tsc` que tudo na pasta `src` será compilado automaticamente. 