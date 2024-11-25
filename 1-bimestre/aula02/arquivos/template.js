console.log(`jfbjkbfdjs
fhsuahfudsa
fjsiadjfisd
fdlshfusd`)//``(template)= é o texto dentro da crase, que te permite escrever e dar enter (sem precisar colocar /n para quebrar linha); a forma que você escreve dentro do template fica da forma que você escreveu; e também te permite colocar variaveis (e calculo, é so por a variavel da seguinte forma= "${variavel}") e texto junto sem precisar concatenar

const nome = "Concatenar"
//para abrir o coderunner = cntrl + alt + n, para interromper = cntrl + alt + m
const concatenar = "Olá " + nome + "!"

console.log(concatenar)


const nome2 = "Template"
const template = `
Olá ${nome2} !`
//console.log(template)
console.log(`1 + 1 = ${1 + 1}`)

function conversaoMaiuscula(maiuscula) {
    return maiuscula.toUpperCase()//.toUpperCase = função deixa a string toda maiuscula
}

console.log(`Olá ${conversaoMaiuscula("fatecanos")}!!!`)