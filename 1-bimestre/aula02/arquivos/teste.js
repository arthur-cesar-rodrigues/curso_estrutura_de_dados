const facul = "FATEC" //a constatante ja tem que declarar seu valor, e voce não mexe neste valor

//cntrl + shift + seta pra baixo = copia a linha atual
//cntrl + ; = a linha selecionada vira comentário e se selecionar novamente tira o comentário
document.getElementById("root").innerHTML = facul.charAt(0)// .charAt= fala o valor na posição dentro do parenteses
document.getElementById("root").innerHTML = facul.charCodeAt(3)
//.chartCodeAt = fala o código da tabela asc do valor dentro do parenteses 
document.getElementById("root").innerHTML = facul.indexOf("3")//mostra a posição daquele valor dentro da variavel
document.getElementById("root").innerHTML = facul.substring(5, 2)// .substring = mostra o valor a variavel a apartir daquela posição dentro do parenteses, voce pode adicionar mais um valor dentro do parenteses (.substring (0, 2))= 1ºvalor= é a posição inicial da variavel que voce quer que apareça na tela, 2ºvalor= é a quantidade de valores que vão aparecer apartir da posição inicial 
document.getElementById("root").innerHTML = facul.replace("F", 2) //.replace=troca o primeiro valor pelo segundo na variável
document.getElementById("root").innerHTML = "Alex,João,Pedro".split(",")
console.log("Alex,João,Pedro".split(","))//essa função separa a string, e poe ela dentro de um vetor, o simbolo de separação fica entre parenteses
