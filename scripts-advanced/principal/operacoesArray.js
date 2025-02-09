

// Operações em um array

// Map = percorrer todo o array

let lista = ["Matheus", "José", "Maria", "Lucas"];

lista.map((item, index) => {
  console.log(`Passando: ${item} - Posição: ${index}`);
});

//=================================================================

// Reduce = Busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  //console.log(`${indice} - indice atual`);
  //console.log(`${original} - array original`);
  console.log("==========================");

  return (acumulador += numero);
});

console.log(`Total do reduce: ${total}`);

//================================================================

// Find = fazer uma busca em um array

let listagem = [5, 3, "José", 2, "Matheus"];

let busca = listagem.find((item) => {
  if (item === "José") {
    return console.log("Item encontrado!!");
  }
});

console.log(busca);

// Filter = filtrar coisas dentro de um array

let palavras = ["Matheus", "Ana", "José", "Ricardo", "Alice"];

let resultado = palavras.filter((item) => {
  return item.length >= 5;
});

console.log(resultado);
