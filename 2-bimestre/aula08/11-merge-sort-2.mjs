function mergeSort (vetor) {
    if (vetor.length < 2) return vetor;

    let meio = Math.floor(vetor.length / 2);

    let vetorEsquerdo = vetor.slice(0, meio);
    let vetorDireito = vetor.slice(meio);

    vetorEsquerdo = mergeSort(vetorEsquerdo);
    vetorDireito = mergeSort(vetorDireito);

    let posicaoEsquerda = 0;
    let posicaoDireita = 0;
    let vetorFinal = [];

    while(posicaoEsquerda < vetorEsquerdo.length && posicaoDireita < vetorDireito.length) {
        if (vetorEsquerdo[posicaoEsquerda] < vetorDireito[posicaoDireita]) {
            vetorFinal.push(vetorEsquerdo[posicaoEsquerda]);
            posicaoEsquerda++;
        } else {
            vetorFinal.push(vetorDireito[posicaoDireita]);
            posicaoDireita++;
        }
    }

    let sobra;

    if (posicaoEsquerda < posicaoDireita) {
        sobra = vetorEsquerdo.slice(posicaoEsquerda);
    } else {
        sobra = vetorDireito.slice(posicaoDireita);
    }

    return[...vetorFinal, ...sobra];
}

// let numeros = [ 7, 3, 2, 16, 24, 4, 11, 9];
// let numerosOrdenados = (mergeSort(numeros));

// console.log({numerosOrdenados});

import { nomes } from "../data/nomes-desord.mjs";

console.time("Tempo de ordenação");

let nomesOrdenados = mergeSort(nomes);

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd("Tempo de ordenação");

console.log(nomesOrdenados);
console.log({memoriaMB});