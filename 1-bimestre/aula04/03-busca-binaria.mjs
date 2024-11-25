let comps
function buscaBinaria (vetor, valorBusca){
    comps = 0
    let inicio = 0
    let fim = vetor.length - 1

    while (fim >= inicio) {
        comps++
        let meio = Math.floor((inicio + fim) / 2)
        // Math.floor = arrendonda o número pra menos
        if(valorBusca === vetor[meio]){
            comps++
            return meio
        } 
        else if (valorBusca> vetor[meio]) {
            comps += 2
            inicio = meio + 1
        } else {
            comps += 2
            fim = meio - 1
        }
    }
    return - 1
}

// let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

// console.log(`Posição de 33: ${buscaBinaria(nums, 33)}; comparações : ${comps}`)

import { nomes } from "../aula03/data/vetor-nomes.mjs"

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}; comparações: ${comps}`)