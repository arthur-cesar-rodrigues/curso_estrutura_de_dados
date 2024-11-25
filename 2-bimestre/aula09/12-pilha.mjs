import Stack from "../lib/Stack.mjs"

let pilha = new Stack();

console.log("Está vazia?", pilha.estaVazia);
console.log(pilha.exibir());

pilha.inserir(35);
pilha.inserir(38);
pilha.inserir(40);
pilha.inserir(10);
pilha.inserir(9);



console.log("Está vazia?", pilha.estaVazia);
console.log(pilha.exibir());


let removido1 = pilha.remover();
let removido2 = pilha.remover();

console.log({removido1});
console.log({removido2});

console.log("Está vazia?", pilha.estaVazia);
console.log(pilha.exibir());

let ultimo = pilha.ultimo();

console.log({ultimo});
