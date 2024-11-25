export default class Stack2 {
    #data;
    constructor () {
        this.#data;
    }

    inserir (valor) {
        this.#data.push(valor);
    }

    remover () {
        return this.#data.pop();
    }

    ultimo () {
        return this.#data[this.#data.length - 1];
    }

    get estaVazia () {
        return this.#data.length === 0
    }

    exibir () {
        return JSON.stringify(this.#data);
    }
    
}