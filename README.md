# yggdrasil3

O curso de Ciência da Computação é aberto e livre para que os alunos decidam quais as habilidades eles desejam aprimorar na sua trajetória acadêmica. Dessa forma, torna-se difícil o acompanhamento pelos alunos, e surge a necessidade de um sistema para gerenciamento das matérias cursadas e as próximas matérias que deve seguir para poder concluir o complexo e farto currículo oferecido pelo Instituto de Matemática e Estatística.

De fato, há uma versão anterior, na qual esse projeto se inspira fortemente. O propósito dele é oferecer uma solução mais simples e mais fácil.

## Como compilar

Antes é necessário que você tenha o NodeJS e o Kotlin instalado no computador.

### Frontend

No diretório _frontend_, instale os packages necessários para rodar o projeto:

```
npm install
```

Depois, basta iniciar o servidor

```
npm start
```

Por último, basta acessar o navegador e visualizar a página web no endereço *localhost:3000*

### Backend

No diretório _api_, builde o projeto

```
./gradlew build
```

Então, inicialize o servidor

```
./gradlew run
```

Assim, a api já está funcionando e recebendo requisições. Ela pode ser visualizada no *localhost:8080*

## Anexos

[Diagrama UML](https://www.figma.com/file/PR940k3M5aMfohfRlHtqg5/Yggdrasil3?type=whiteboard&node-id=0-1&t=QIoK6d9Zrw5q9To9-0)

## Versões usadas

npm version: 10.5.0
Kotlin version 2.0.0-release-341 (JRE 21.0.3)
openjdk version "11.0.23" 2024-04-16 (Para MacOs)
