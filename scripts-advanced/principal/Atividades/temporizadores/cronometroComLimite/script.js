// Atividade 2: Cronômetro com limite
// Implemente um cronômetro que conte até 10 segundos. Quando atingir o limite, deve parar automaticamente e exibir uma mensagem "Tempo esgotado!". Use clearInterval para interromper o contador.

var numeroAleatorio1 = Math.floor(Math.random() * 100);
var numeroAleatorio2 = Math.floor(Math.random() * 100);
// floor = arredonda para o número inteiro mais próximo.
// random = retorna um número aleatório, nesse caso entre 0 e 99. Inclui números quebrados, por isso o uso do floor

var questao = document.querySelector("#questao");
const loadQuestion = () => {
  questao.innerText = `Questão: ${numeroAleatorio1} + ${numeroAleatorio2}`;
};

loadQuestion();

var tempo = document.querySelector("#tempo");
var seconds = 10;

var decrementar = setInterval(() => {
  if (seconds < 0) {
    clearInterval(decrementar); // Parar o setInterval
    alert("Tempo esgotado!");
    window.location.reload(true);
  } else {
    tempo.innerText = `Tempo: ${seconds--}`;
  }
}, 1000);

var soma = numeroAleatorio1 + numeroAleatorio2;

var resposta = document.getElementById("resposta");

const enviar = () => {
  if (resposta.value == soma) {
    alert(`Parabéns, você acertou!!
Resposta: ${soma}`);
    window.location.reload(true); // Método para recarregar página, como está true, ele irá recarregar a página.
  } else {
    alert(`Que pena, você errou. Tente outra questão!! 
Resposta: ${soma}`);
    window.location.reload(true);
  }
};
