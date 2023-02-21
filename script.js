/*
    Jeffrey Carlos Mourão Blanc

    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let number1 = Number(prompt('Digite o primeiro número:'))
let number2 = Number(prompt('Digite o segundo número: '))

alert(`A soma dos dois números é: ${number1 + number2}`)
alert(`A substração dos dois números é: ${number1 - number2}`)
alert(`A multiplicação dos dois números é: ${number1 * number2}`)
alert(`A divisão dos dois números é: ${number1 /number2}`)
alert(`O resto da divisão dos dois números é: ${number1 % number2}`)

if (((number1 + number2) % 2) == 0) 
    alert(`A soma de ${number1} e ${number2} é um número par`)
else
    alert(`A soma de ${number1} e ${number2} é um número ímpar`)

if (number1 == number2) 
    alert(`${number1} e ${number2} são números iguais`)
else
    alert(`${number1} e ${number2} são números diferentes`)


