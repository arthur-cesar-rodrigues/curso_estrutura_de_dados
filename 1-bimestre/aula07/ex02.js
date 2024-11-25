/*2. Faça uma funcão recursiva que receba um número inteiro positivo par N e imprima utilizando
o console.log(), todos os números pares de 0 até N em ordem decrescente.*/

function imprimir (x) {
    if (x % 2 === 0) {
        if (x === 0) {
            return 
        } else if (x > 0) {
            console.log(x);
        }
        imprimir(x - 2)
    } else {
        console.log("Número ímpar")
    }
}

let num = 13;
imprimir(num)