/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

function calcular(event) {
    event.preventDefault();

    var resultado = document.getElementById('resultado');
    resultado.style.display = 'flex';
}