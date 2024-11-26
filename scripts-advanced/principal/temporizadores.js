// Temporizadores

// SetInterval
// Vai ser executado de tempos em tempos infinitamente

function acao() {
  document.write("Executando... <br/>");
}

// Dois parâmentos, primeiro a função criada e depois o tempo de execução em millisegundos

//Pode ser passado executando um função externa
setInterval(acao, 1000);

// Pode ser passado executando uma função anônima
setInterval(() => {
  document.write("Executando!!! <br/>");
}, 1000);

// Atrelando a uma variavel

var timer = setInterval(() => {
  document.write("Executando!!! <br/>");
}, 1000);

clearInterval(timer); // Para a execução do setInterval

// SetTimeOut
// Executa apenas uma vez o que é passado

// função/millisegundos - após esse determinado tempo a função será executada

setTimeout(acao, 3000);

// Com função anônima

setInterval(() => {
  console.log("Executou nosso timeout");
}, 3000);
