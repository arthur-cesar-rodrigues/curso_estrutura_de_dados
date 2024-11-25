const valores = [7,8,9,10,11]//array é uma estrutura de dados, pode ser matriz e vetor
console.log(valores)//mostra o vetor inteiro
console.log(valores[2], valores[4])//mostrar o vetor por posição

console.log(valores.length)//.lenght= essa função mostra a quantidade de valores dentro do vetor
console.log(valores.length - 1)//.lenght - 1 = essa função mostra a última posição do vetor

valores[5] = 20//essa é a forma de atribuir um valor para dentro do vetor

console.log(valores)
valores.push({id:3}, false, 10+15, "texto")//.push= essa função adiciona valores ao vetor depois da última posição, os valores que vão ser colocados na ordem dentro do parenteses e separados por vírgula
console.log(valores)
console.log(`peguei o ${valores.pop()}`)//.push= essa função pega e retira o último valor do vetor

delete valores[0]//essa função deleta o valor daquela da posição do valor
console.log(valores)