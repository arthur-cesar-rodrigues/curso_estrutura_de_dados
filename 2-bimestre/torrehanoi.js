function torreDeHanoi (numeroDisco, torreOrigem, torreDestino, torreAtual) {
    if (numeroDisco === 1) {
        console.log(`Mover disco 1 de ${torreOrigem} para ${torreDestino}`);
        return;
    }
    torreDeHanoi(numeroDisco - 1, torreOrigem, torreAtual, torreDestino);

    console.log(`Mover disco ${numeroDisco} de ${torreOrigem} para ${torreDestino}`);

    torreDeHanoi(numeroDisco - 1, torreAtual, torreDestino, torreOrigem);
}

torreDeHanoi(3, "A", "C", "B");


