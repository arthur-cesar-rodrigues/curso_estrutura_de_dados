const resultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Aprovado com nota TOP")
            break//interrompe o programa quando atingir condição (todo case precisa)
        case 8: case 7: case 6:
            console.log("Aprovado")
            break
        case 5: case 4:
            console.log("Substitutiva")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default: //default indica quando o usuario digitou algou que não se encaixou em nenhum dos casos
            console.log("Nota inválida")
        
        resu
        
    }  //math.floor = arredonda o número para baixo (ex: 9.5 vira 9) e Math.ceil = arredonda o número para cima (9.1 vira 10)
}

resultado(6)