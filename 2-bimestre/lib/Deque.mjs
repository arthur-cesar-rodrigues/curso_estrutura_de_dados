// permite inserir dados no começo ou no fim, e pode excluir dados do começo ou no fim
export default  class Deque {
    #data;

    constructor(){
        this.#data = [];
    }

    inserirNaFrente(valor) {
        this.#data.unshift(valor);
        // unshift = insere valores no começo do array, os valores inseridos viram os primeiros
    }

    inserirAtras(valor) {
        this.#data.push(valor);
    }

    removerDaFrente() {
        return this.#data.shift();
    }

    removerDeTras() {
        return this.#data.pop();
    }

    ultimoDaFrente() {
        // primeiro, ultimo dado inserido na frente, primeira posição do array
        return this.#data[0];
    }

    ultimoDeTras() {
        // ultimo, ultimo a ser inserido atras, a ultima posição do array
        return this.#data[this.#data.length - 1];
    }

    get estaVazio() {
        return this.#data.length - 1 === 0;
    }

    mostrar() {
        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++){
            if (output !== "[ ") output += ", ";
                output += `Posição (${i}): ${this.#data[i]}`;
        }
        return output += " ]";
    }
}