

// Rest Operator

function convidados(...nomes) {
    console.log("Seja bem vindo");    
    console.log(nomes);

}

convidados("Kaio", "Melinda", "Liz", "Danilo", "Thaiane");


function sorteador(...numeros) {
    console.log(numeros);
    
    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeroGerado);
    console.log(`Número gerado foi: ${numeros[numeroGerado]}`);
    

}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);
