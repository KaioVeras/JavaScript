/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault(); // Faz com que os dados do input não saiam
  // Quando de trabalha com formulários, após aperter no submit a página tem um mini refresh e os dados saem do input. Dessa forma eles vão continuar estáticos.

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);

  resultado = document.getElementById('resultado');

  if (imc < 17) {
    resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
      0
    )} <br> Cuidado você está muito abaixo do peso!!`;
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
      0
    )} <br> Cuidado você está abaixo do peso!!`;
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
      0
    )} <br> Você está no peso ideal!!`;
  } else if (imc > 25 && imc < 29.99) {
    resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
      0
    )} <br> Você está acima do peso!!`;
  } else if (imc >= 30) {
    resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
      0
    )} <br> Cuidado, você está obeso!!`;
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}
