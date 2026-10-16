function ejecutarEntradaUsuario(userInput) {
    // Vulnerabilidad intencional: evaluacion de codigo sin sanitizar
    eval(userInput); 
}

const entradaPeligrosa = "console.log('Codigo ejecutado')";
ejecutarEntradaUsuario(entradaPeligrosa);