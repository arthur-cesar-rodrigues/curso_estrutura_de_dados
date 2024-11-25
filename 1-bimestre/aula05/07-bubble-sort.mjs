let pass, comps, trocas
function bubbleSort (vet) {
    let trocou
    pass = 0
    comps = 0
    trocas = 0
    do {
        pass++
        trocou = false
        for(let i = 0; i < vet.length - 1; i++){
            comps++
            if (vet[i] > vet[i + 1]){
                [vet[i], vet[i + 1]] = [vet[i + 1], vet[i]]
                trocas++
                trocou = true
            }
        }
    } while(trocou)
}
// let vetor = [3, 2, 90, 8, 15, 30, 25]
// bubbleSort(vetor)

import { nomes } from "../aula03/data/nomes-desord.mjs"

bubbleSort(nomes)
console.log(nomes)
console.log(`Passagens: ${pass}; comparações: ${comps}; trocas: ${trocas}`)