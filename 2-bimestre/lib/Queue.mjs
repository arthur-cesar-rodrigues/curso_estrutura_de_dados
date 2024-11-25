// o primeiro elemento recebido é o primeiro removida/executado

export default class Queue {
    #data;

    constructor() {
        this.#data = [];
    }

    enqueue(valor) {
        this.#data.unshift(valor);
    }

    denqueue() {
        return this.#data.shift();
        // shift = remove o primeiro elemento, imprime na tela o valor que removeu
    }
    
    ultimo() {
        return this.#data[0];
    }

    get estaVazio() {
        return this.#data.length === 0;
    }

    print() {
        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") output += ", ";
                output += `Posição (${i}): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}