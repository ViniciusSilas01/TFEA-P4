# Exercício aula 3

## Objetivo

O objetivo deste exercício é o desenvolvimento de quatro componentes, com orientações de renderizações distintas, utilizando os seguintes recursos do React: Props; Operador Ternário; Destructuring em Props; Fragments. 


## Instruções

**EstouConseguindoAprenderReact**:
- Criar um componente intitulado "EstouConseguindoAprenderReact".
- Implementar um Operador Ternário que verifique uma Props intitulada "estouConsequindo".
- Sendo a condição True, em tela deve renderizar "Estou indo bem...".
- Sendo a condição False, em tela deve renderizar "Preciso estudar mais". 

**EstaComSono**:
- Criar um componente intitulado "EstaComSono".
- Implementar um Operador Ternário que verifique uma Props intitulada "comSono".
- Sendo a condição True, em tela deve renderizar "Hora de descansar".
- Sendo a condição False, em tela deve renderizar "Bora estudar mais um pouco!".

**Aluno**: 
- Criar um componente intitulado "Aluno", que renderize informações sobre um aluno, como: nome; e-mail; curso.
- Utilizar o recurso Destructuring para extrair as propriedades nome, e-mail e curso simultaneamente, ao invés de cada propriedade individualmente.
- Renderizar o componente "Aluno" em um elemento da página.
- Criar um Array contendo três alunos em objetos literais.
- Percorrer o Array através de .map de modo que renderize estes três alunos na tela.

**NovoAluno**:
- Recriar o componente "Aluno", desta vez intitulado "NovoAluno", utilizando Fragments de modo a evitar o elemento pai "div".
- O componente "NovoAluno" deve renderizar as seguintes informações sobre um aluno: nome; e-mail; curso; media; status.
- Utilizar o recurso Destructuring para extrair as propriedades nome, e-mail, curso, media e status simultaneamente, ao invés de cada propriedade individualmente.
- Renderizar o componente "NovoAluno" em um elemento da página.
- Criar um Array contendo três alunos em objetos literais.
- Percorrer o Array através de .map de modo que renderize estes três alunos na tela.
- Implementar um Operador Ternário ao item "status" de modo a exibir as mensagens "Aprovado(a)" sendo a média maior ou igual a 7, ou "Reprovado(a)" sendo a média menor que 7.

## Resultado no Navegador

**EstouConseguindoAprenderReact**:

![Captura de tela 2025-04-03 161434](https://github.com/user-attachments/assets/00a73355-44df-4a50-a4b4-6a0b4a0e1c78)

**EstaComSono**:

![Captura de tela 2025-04-03 161632](https://github.com/user-attachments/assets/d3dd67bb-a6d6-412c-9b8b-7c90ad819288)

**Aluno**: 

![Captura de tela 2025-04-03 160934](https://github.com/user-attachments/assets/b947929e-8f79-42d3-973d-ab60557b8fb4)

**NovoAluno**:

![Captura de tela 2025-04-03 160648](https://github.com/user-attachments/assets/62b718d7-6e40-41db-855d-4533a441ffea)

## Tecnologias Utilizadas

- Visual Studio Code.
- Node.js.
- NPM.
- Vite.
- React.
- JavaScript.
