let pass, comp, trocas
function selectionSort(vetor) {
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass = 0
        comp = 0
        trocas = 0
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            pass++
            if (vetor[posMenor] > vetor[i]) {
                posMenor = i
                comp++
                
            }
        }
        comp++
        if(vetor[posSel] > vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            trocas++
        }
    }

}

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
// console.time("Tempo de ordenação")
// selectionSort(nums)
// let memoriaMB = process.memoryUsage().heapUsed / 1024 /1024
// console.log(nums)
// console.timeEnd("Tempo de ordenação")
// console.log(`Passagens: ${pass}; comparações: ${comp}; trocas ${trocas}`)

import {nomes} from "../aula03/data/nomes-desord.mjs"

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
console.time("Tempo de ordenação")
selectionSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 /1024
console.log(nomes)
console.timeEnd("Tempo de ordenação")
console.log(`Passagens: ${pass}; comparações: ${comp}; trocas ${trocas}`)
