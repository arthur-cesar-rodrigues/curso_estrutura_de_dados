let pass, comps, trocas

function bubbleSort(vetor){
    pass=0, comps=0, trocas=0
    let trocou
    do {//do = faça
        pass++
        trocou = false
         // Percurso FOR tradicional até a PENÚLTIMA posição do vetor
        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if(vetor[i] > vetor[i+1]){
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                //fazendo troca de valor do vetor entre posições, sem precisar de auxiliar
                // Efetua a troca entre os elementos por desestruturação
                trocou = true
                trocas++
            }
        } 
    }while (trocou)//while=enquanto
}

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

// bubbleSort(nums)//ordena primeiro
// console.log(nums)//para depoism mostrar
// console.log(`Passagens = ${pass}, comparações= ${comps}, trocas ${trocas}`)

// import { nomes } from "../aula03/data/nomes-desord.mjs"
// bubbleSort(nomes)
// console.log(nomes)
// console.log(`Passagens = ${pass}, comparações= ${comps}, trocas= ${trocas}`)
let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
console.time("Tempo de ordenação")
bubbleSort(nums)
let memoriaMB = process.memoryUsage().heapUsed / 1024 /1024
console.log(nums)
console.timeEnd("Tempo de ordenação")
console.log(`Passagens: ${pass}; comparações: ${comp}; trocas ${trocas}; memória ${memoriaMB}`)