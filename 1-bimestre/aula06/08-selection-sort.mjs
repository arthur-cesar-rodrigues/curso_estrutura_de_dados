let pass, comp, trocas

function selectionSort(vetor, fnComp) {
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass = 0
        comp = 0
        trocas = 0
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            pass++
            if (fnComp(vetor[posMenor], vetor[i])) {
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

import {objMotoristas} from "../aula03/data/motoristas-obj-desord.mjs"

const func = (elem1, elem2) => {
    if (elem1.razao_social === elem2.razao_social) {
        return elem1.nome_motorista > elem2.nome_motorista
    } else {
        return elem1.razao_social > elem2.razao_social
    }
} 

selectionSort(objMotoristas, func)
console.log(objMotoristas)


