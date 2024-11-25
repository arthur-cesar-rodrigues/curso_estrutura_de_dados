import { objNomes } from "../aula03/data/vetor-obj-nomes.mjs"

function buscaBinaria(vetor, fncomp) {
    let inicio = 0
    let fim = vetor.length - 1
    while(fim >= inicio) {
        let meio = Math.floor((inicio + fim)/2)

        switch(fncomp(vetor[meio])) {
            case 0:
                return meio

            case 1:
                inicio = meio + 1
                break
            default:
                fim = meio - 1 
        }

    }
    return -1
}

// function comparar(valorMeio) {
    
//     if ("ALEXANDRE" === valorMeio.first_name) return 0
//     else if ("ALEXANDRE" > valorMeio.first_name) return 1
//     else return -1

// }



// console.log("Posição de first_name ===  Alexandre", buscaBinaria(objNomes, comparar))

console.log("Posição do objeto em first_name === JUCENEIDE",
buscaBinaria(objNomes, (valorMeio, valorBusca = "JUCENEIDE") => {
    if (valorBusca === valorMeio.first_name) return 0;
    else if (valorBusca > valorMeio.first_name) return 1;
    else return -1;
    })
);