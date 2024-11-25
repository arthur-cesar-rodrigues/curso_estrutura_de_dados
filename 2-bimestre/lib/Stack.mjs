// pilha = é uma forma de armazenar dados, através de pilha

// classe = quando chamada, é usado tudo que dentro dela, ou seja, seus atributos, a forma de criar uma classe é igual ex abaixo seu nome precisa começar com a letra maiuscula(ex: Stack- abaixo)

export default class Stack{
    #data;
    // tudo dentro de uma classe é um atributo (ex: #data), o atributo recebe dados; # = encapsula o atributo, vai ser privado

    constructor(){
        this.#data = [];
    }

    inserir(valor){
        this.#data.push(valor);
        // inserir (método = função dentro de um objeto) está inserindo valor dentro do atributo "data" (que é privado)
    }

    remover(){
        return this.#data.pop();
    }

    ultimo(){
        return this.#data[this.#data.length - 1];
    }

    get estaVazia(){
        return this.#data.length === 0;
    }
    // get = é usado para buscar/vizualizar/acessar algo

    exibir(){
        return JSON.stringify(this.#data);
        // JSON.stringify = pegar a pilha e transformar em string
    }
    
    // set = outro método de inserir algum dado, semelhante ao push

}