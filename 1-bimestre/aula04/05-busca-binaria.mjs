// let vetor = [0, 11, 22, 33, 44, 55, 66, 77, 88]

function buscaBinaria (vet, valor) {
    let inicio = 0
    let fim = vet.length - 1

    while (fim >= inicio){
        let meio = Math.floor((inicio + fim) / 2)
        if (valor === vet[meio]){
            return meio
        } 
        else if (valor > vet[meio]) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }
    return -1
}

// console.log(buscaBinaria(vetor, 77)) 

import { nomes } from "../aula03/data/vetor-nomes.mjs"

console.log(`Posição de Arthur: ${buscaBinaria(nomes, "ARTHUR")}`)