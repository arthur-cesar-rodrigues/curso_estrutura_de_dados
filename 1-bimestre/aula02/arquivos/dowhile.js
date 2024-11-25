//dowhile = faça enquanto, ela ja entra com o número/ condição, ele ja entra no looping, ele faz o teste no final


function inteiroAleatorio(num) {
    const valor = Math.random() * num
    return Math.floor(valor)
}

let opcao
let cont = 0
do { 
    opcao = inteiroAleatorio(15)
    console.log(`Opção escolhida foi ${opcao}`)
    cont += 1

} while (opcao !=1 ) {
    console.log(`números sorteados foi ${cont}`)
    console.log("FIM!")
}

