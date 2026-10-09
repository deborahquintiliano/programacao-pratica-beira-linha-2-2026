//Atividade prática 08/10
let nome = undefined;
let viagem = true;
let status = 3;

let clienteFiel = nome ?? "Cliente Fiel";
let embalagemClienteFiel = viagem ? 'Sacola' : 'Bandeja';

console.log("Pedido de " + clienteFiel + " com embalagem de " + embalagemClienteFiel);

switch (status) {
    case 1:console.log("Pedido feito"); break;
    case 2: console.log("Seu pedido está sendo preparado"); break;
    case 3: console.log("Seu pedido está pronto!");break;
    default:console.log("Status inválido");
}