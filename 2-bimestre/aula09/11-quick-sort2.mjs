function quickSort (vetor, inicio = 0, fim = vetor.length - 1) {
    if (fim <= inicio) return;

    const pivot = fim;
    let div = inicio - 1;

    for (let i = inicio; i < fim; i++) {
        if (vetor[pivot] > vetor[i]) {
            div++;
            if (div !== i) {
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]];
            }
        }
    }
    div++;

    if (vetor[div] > vetor[pivot] && div !== pivot) {
        [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]];
    }

    quickSort(vetor, inicio, div - 1);
    quickSort(vetor, div + 1, fim);
}

// let numeros = [ 2, 5, 7, 1, 6, 3, 4 ];

// quickSort(numeros);

// console.log(numeros);

import { nomes } from "../data/nomes-desord.mjs";

console.time("Tempo de ordenação");

quickSort(nomes);

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd("Tempo de ordenação");

console.log(nomes);
console.log({memoriaMB});
