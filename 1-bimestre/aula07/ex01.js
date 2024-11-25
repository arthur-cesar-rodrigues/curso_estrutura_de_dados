// 1. Crie uma função recursiva que receba um número inteiro positivo N e calcule o somatório dos números de 1 a N.

function soma (x){
    if (x === 1 || x === 0) {
        return x
    } else {
       return (x + soma(x - 1))
    }
}

console.log(soma(6))