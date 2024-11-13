/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

function calcular(event) {
  event.preventDefault();

  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var imc = peso / (altura * altura);

  var resultadoImc = document.getElementById("resultadoImc");
  var resultado = document.getElementById("resultado");

  var resultImc = document.createElement("h1");

  var areaTextImc = document.getElementById("textImc");
  var textImc = document.createElement("p");

  resultado.style.display = "flex";

  resultImc.id = "titleImc";
  resultImc.style.fontSize = "50px";
  resultImc.innerText = imc.toFixed(1);

  resultadoImc.appendChild(resultImc);

  textImc.style.fontSize = "18px";
  areaTextImc.appendChild(textImc);

  if (imc < 17) {
    textImc.innerText = "Você está muito abaixo do peso.";
  } else if (imc >= 17 && imc <= 18.49) {
    textImc.innerText = "Você está abaixo do peso.";
  } else if (imc >= 18.5 && imc <= 24.99) {
    textImc.innerText = "Você está no peso ideal.";
  } else if (imc >= 25 && imc <= 29.99) {
    textImc.innerText = "Você está acima do peso.";
  } else {
    textImc.innerText = "Você está obeso.";
  }
}
