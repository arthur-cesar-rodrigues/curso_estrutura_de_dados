function inteiroAleatorio(num) {//math.random = função que gera um número alatório entre 0 e 0.99 (um numero quebrado)
    const valor = Math.random() * num
    return Math.floor(valor)
}

let opcao = 0
let cont = 0
while (opcao != 1) { //!= = diferente de; while = enquanto (looping), precisa forçar entrada para fazer o teste, o teste é feito no início
    opcao = inteiroAleatorio(15)
    console.log(`Opção escolhida foi ${opcao}`)
    cont += 1

}
console.log("FIM!")
console.log(`números sorteados foi ${cont}`)