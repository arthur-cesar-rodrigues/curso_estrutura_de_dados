import Queue from "../lib/Queue.mjs";

let fila = new Queue();

console.log("A fila está vazia?", fila.estaVazio);
console.log(fila.print());

fila.enqueue("Alexandre");
fila.enqueue("João");
fila.enqueue("Fulano");
fila.enqueue("Siclano");
fila.enqueue("Beltrano");

console.log(fila.print());

let atendido = fila.denqueue();

console.log({atendido});
console.log(fila.print());

atendido = fila.denqueue();
console.log({atendido});
console.log(fila.print());

fila.enqueue("Sérgio");
console.log(fila.print());

let proximo = fila.ultimo();
console.log({proximo});