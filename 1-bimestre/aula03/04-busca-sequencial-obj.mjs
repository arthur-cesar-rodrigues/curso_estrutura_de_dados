import { objNomes } from "../aula03/data/vetor-obj-nomes.mjs"
const nome = "ALEXANDRE";
const frequencia = 97;
let aux, cont;
function buscaSequencial (vetor, fnComp) {
    for (let i = 0; i < vetor.length; i++) {
        if (fnComp(vetor[i])){
            aux = i
            return aux;
        }
    }
    aux = -1
    return aux;
}
function comparaNome (obj) {
    return obj.first_name === nome;
}

function comparaFrequencia (obj){
    return obj.frequency_total === frequencia
}

function msgname (y){
    if (aux != -1){
        console.log(`Foi encontrado o nome ${nome}: posição ${aux}.`)
    } else {
        console.log(`Não foi encontrado o nome ${nome}, insira outro por favor.`)
    }
}

function msgfrequency (y) {
    if (aux != -1){
        console.log(`Posição da pessoa com frequência ${frequencia}%: posição ${aux}`)
    } else {
        console.log(`Não foi encontrada nenhuma pesso com frequência de  ${frequencia}%, insira outra frequencia por favor`)
    }
}

// console.log(`Posição do nome ${nome}: ${buscaSequencial(objNomes, comparaNome)}`);
msgname(buscaSequencial(objNomes, comparaNome))
msgfrequency(buscaSequencial(objNomes, comparaFrequencia))
