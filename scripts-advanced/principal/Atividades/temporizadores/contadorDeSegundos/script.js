// Atividade 1: Contador de segundos
// Crie um contador que atualize a cada segundo na tela, mostrando os segundos que passaram desde o início da execução da página. Adicione um botão para pausar e outro para reiniciar o contador.

var seconds = 0;

var textSeconds = document.getElementById("seconds");

var stopButton = document.getElementById("stopButton");
var startButton = document.getElementById("startButton");

startButton.disabled = true;

const countSeconds = () => {
  textSeconds.innerText = `Tempo de tela: ${seconds++}`;
};

var contador = setInterval(countSeconds, 1000);

const stopInterval = () => {
  clearInterval(contador); // Parar o contador
  startButton.disabled = false; // Ativiar botão start
  stopButton.disabled = true; // Desativar botão stop
};

const startInterval = () => {
  contador = setInterval(countSeconds, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
};
