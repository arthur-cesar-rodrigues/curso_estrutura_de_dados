// function fatorial (x) {
//     let fat = 1
//     for(let i = x; i > 1; i--) {
//         fat = fat * i
//     }
//     return fat
// }
// console.log(fatorial(0))

function fatorialRecursivo (x) {
    if (x <= 1) {
        return 1
    } else {
        return (x * fatorialRecursivo(x - 1))
    }
}

console.log(fatorialRecursivo(10))