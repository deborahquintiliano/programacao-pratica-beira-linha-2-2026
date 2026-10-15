//Questao 01: 
//Algoritmo que verifique se um num, é positivo ou negativo.
{
let numero1 = 54
function verificarNumero (numero) {
    if (numero>0)
        console.log ("Este número é positivo")
    else if (numero<0)
        console.log ("Este número é negativo")
    else
    console.log ("O número zero é neutro")
}
}

//Questao 02
// Algoritmo que calcule o antecessor e sucessor

let numero2 = 23
let antecessor = numero2 - 1
let sucessor = numero2 + 1 

console.log ("O antecessor é " + antecessor)
console.log ("O sucessor é " + sucessor)

//Questão 03
// Calcula idade, e verifica se é maior de idade

let anoNascimento = 2003
let anoAtual = 2026
let idade = anoAtual - anoNascimento

if (idade >-18)
    console.log ("O usuário é maior de idade")
else (idade<18)
    console.log ("O usuário é menor de idade")

//Questão 04
//Verifica se o número é par

let numeroA = 52
let numeroB = 2
let resultado = numeroA % numeroB
if (resultado===0) {
    console.log("O número é par") }

else {
console.log("O número é impar") }

//Questão 05
//Verifica se o número é impar

let numeroC = 87
let numeroD = 2
let resultado05 = numeroC % numeroD
if (resultado05!==1) {
    console.log("O número é impar") }

else {
console.log("O número é par") }

//Questão 06
//Calculadora para realizar operações aritméticas

let numeroE = 10
let numeroF = 5

let soma = numeroE + numeroF
console.log ("A soma é " + soma)
let subtracao = numeroE - numeroF
console.log ("A subtração é " + subtracao)
let multiplicacao = numeroE * numeroF
console.log ("A multiplicação é " + multiplicacao)
let divisao = numeroE / numeroF
console.log ("A divisão é " + divisao)  

//Questão 07
//Avaliação de notas e verifica aprovação

let nota1 = 40, nota2 = 43, nota3 = 27
let media = (nota1+nota2+nota3)/3

if (media>=60) {
    console.log ("O aluno está aprovado") }
else {
        console.log ("O aluno está reprovado")
    }
