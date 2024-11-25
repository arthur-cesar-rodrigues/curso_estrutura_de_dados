// let vetor = [2, 1, 7, 9, 90, 47, 289, 0, 74, 4384, 89];

let cont;

function buscaSequencial (vet, valor) {
    let aux
    cont = 0
    for (let i = 0; i < vet.length; i++){
        cont++
        if (vet[i] === valor) {
            aux = i
            return aux
        }
    }aux = -1
    return aux
}

// let resp = buscaSequencial(vetor, v)

function msg (x, y){
    if (y != -1) {
        console.log(`O nome ${x} foi encontrado, ele está na posição ${y}.`)
     } else {
        console.log(`O nome ${x} não foi encontrado, insira outro nome.`)
     }
}

// msg(v, resp)
// console.log(`Comparações: ${cont}`)

import { nomes } from "./data/vetor-nomes.mjs"

const v = "ARTHUR";
let resp = buscaSequencial(nomes, v);
msg(v, resp);
console.log(`Comparações: ${cont}`);




 







