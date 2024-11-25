import Deque from "../lib/Deque.mjs";

let listaCompras = new Deque();

// alimentício
listaCompras.inserirNaFrente("Arroz");
listaCompras.inserirNaFrente("Feijão");
listaCompras.inserirNaFrente("Macarrão");
console.log(listaCompras.mostrar());

// higiene pessoal
listaCompras.inserirAtras("Sabão em Pó");
listaCompras.inserirAtras("Desodorante");
listaCompras.inserirAtras("Água Sanitária");
console.log(listaCompras.mostrar());

listaCompras.inserirNaFrente("Café");
listaCompras.inserirNaFrente("Açúcar");
listaCompras.inserirAtras("Shampoo");
console.log(listaCompras.mostrar());

listaCompras.removerDaFrente();
listaCompras.removerDeTras();
console.log(listaCompras.mostrar());

let primeiro = listaCompras.ultimoDaFrente();
let ultimo = listaCompras.ultimoDeTras();

console.log({primeiro});
console.log({ultimo});


