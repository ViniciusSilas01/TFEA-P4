# Exercício aula 2

## Objetivo

O objetivo deste exercício é o desenvolvimento de dois componentes, utilizando Hooks em seu tipo useState, um recurso do React. O primeiro Hook será intitulado HookContador, e deverá alterar o valor do contador para o valor atual + 1. O segundo Hook será intitulado HookMegaSena, e deverá sorteador 6 elementos em números de 1 a 60.

## Instruções

**HookContador**: 
- Criar um componente intitulado HookContador. 
- Implementar ao componente um useState "contador" com estado inicial de valor 1.
- Adicionar uma função "IncrementadorContador" que irá alterar o valor do contador para o valor atual + 1.
- Desenvolver um button "Incrementar contador" para que trabalhe o contador e exiba o valor do incremento atualizado.
- Gerar uma página de exibição, incrementando as seguintes frases "Contador useSate" e "O contador está em: ".

**HookMegaSena**:
- Criar um componente intitulado HookMegaSena.
- Implementar ao componente um useState que armazene um número sorteado, que tem o estado inicial vazio. 
- Implementar ao componente outro useState com estado inicial de um array vazio para armazenar os números sorteados.
- Adicionar uma função "SortearNumero" que deverá abastecer o useState de número sorteado com um número aleatório de 1 a 60. 
- Armazenar os valores já sorteados em uma array.
- Não deverá permitir que um novo número seja sorteado caso o array já contenha os 6 elementos, criar um alert "Já temos os 6 números sorteados!" caso isto venha a ocorrer.
- Desenvolver um button "Sortear número" para que chame a função e efetue o sorteio.
- Gerar uma página de exibição, incrementando as seguintes frases "Sorteador da Mega em React", "Último número sorteado: " e "Sorteados: ".

## Resultado no Navegador

**HookContador**: 

![Captura de tela 2025-04-01 154425](https://github.com/user-attachments/assets/942ff9c5-6f62-4b91-bf69-fd1215d21534)

**HookMegaSena**:

![Captura de tela 2025-04-01 155307](https://github.com/user-attachments/assets/464c1e84-9477-494e-ba45-8970d703bfca)

## Tecnologias Utilizadas

- Visual Studio Code.
- Node.js.
- NPM.
- Vite.
- React.
- JavaScript.





