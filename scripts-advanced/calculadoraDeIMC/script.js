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

  var resultImc = document.getElementById("titleImc");

  var areaTextImc = document.getElementById("areaTextImc");
  var textImc = document.getElementById("descriptionImc");

  if (peso === "" && altura === "") {
    alert("Atenção, preencha todos os dados!");
    return;
  } else if (peso === "") {
    alert("Por favor, preeencha seu peso!");
    return;
  } else if (altura === "") {
    alert("Por favor, preencha sua altura!");
    return;
  }

  resultado.style.display = "flex";

  resultImc.innerText = imc.toFixed(1);

  resultadoImc.appendChild(resultImc);

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

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
