let comps
function buscaSequencial(vetor, valorBusca){
    comps = 0
    for(let i = 0; i < vetor.length; i++){
        comps++
        if(vetor[i] === valorBusca){
            return i
        }
    }
    return -1
}
//busca sequencial = é a função que busca dados dentro de um vetor, que procura os dados posição por posição, ou seja, vai procurar um dado(elemento específico) dentro de um vetor, e quando ele achar ele retorna a posição daquele dado dentro do vetor, e quando a função acha ele para de procura; se ele não achar após procurar o vetor inteiro ele vai retorna o "-1"; no exemplo acima o looping (for) procurar 6 vezes
// const frutas = ["laranja", "maça", "uva", "pera", "jabuticaba", "limão", "mamão"]

// console.log("Posição de pera: ", buscaSequencial(frutas, "pera"))
// console.log("Posição de uva: ", buscaSequencial(frutas, "uva"))
// console.log("Posição de laranja: ", buscaSequencial(frutas, "laranja"))
// console.log(`Posição de abacate: ${buscaSequencial(frutas, "abacate")}`)

import { nomes } from './data/vetor-nomes.mjs'
//para exportar um vetor em outra pasta voce deve: import + { nomevetor } + from + "caminho do arquivo mjs"
console.log(`Posição de Alexandre: ${buscaSequencial(nomes, "ALEXANDRE")}; comparações: ${comps}`)

