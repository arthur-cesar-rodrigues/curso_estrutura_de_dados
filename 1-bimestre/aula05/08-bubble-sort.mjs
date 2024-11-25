let pass, comps, trocas;
function bubbleSort(vet, fnComp) {
    (pass = 0), (comps = 0), (trocas = 0);
    let trocou;
    do {
        pass++;
        trocou = false;

        for (let i = 0; i < vet.length - 1; i++) {
            comps++
            if (fnComp(vet[i], vet[i + 1])) {
                [vet[i], vet[i + 1]] = [vet[i + 1], vet [i]];
                trocou = true;
                trocas++;
            }
        }
    } while (trocou);
}

import { objMotoristas } from "../aula03/data/motoristas-obj-desord.mjs";

// function comparaNome (x, y) {
//     return x.nome_motorista > y.nome_motorista;
// }

// bubbleSort(objMotoristas, comparaNome)

function comparaRazaoNome (x, y) {
    if (x.razao_social === y.razao_social) {
        return x.nome_motorista > y.motorista;
    } else {
        return x.razao_social > y.razao_social;
    }
}

bubbleSort(objMotoristas, comparaRazaoNome);
console.log(objMotoristas);
console.log(`Passagens: ${pass}
Comparações: ${comps}
Trocas: ${trocas}`);