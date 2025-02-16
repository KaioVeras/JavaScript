

// Desafio

// ================ Crie uma lista de produtos ================

// A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

// Exiba essa lista no console quando abrir o index.html
console.log(produtos);

// Mostre no console quantos produtos tem nessa lista
console.log(produtos.length);

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes

console.log(
  produtos.filter((produto) => {
    return produto != "Mouse";
  })
);

// Forma mais simplificada
produtos.splice(2, 1);
console.log(produtos);

// Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.

produtos.find((produto) => {
  if (produto === "Computador") {
    console.log("Este produto está na lista!!");
    console.log(produto);
  } else {
    console.log("O produto não foi encontrado!!");
  }
});

// Remova o segundo item da sua lista

produtos.splice(1, 1);
console.log(produtos);

// ================ Crie uma lista de apenas numeros 1,3,5,7,0,9​ ================

let numeros = [1, 3, 5, 7, 0, 9];

// Ordene essa lista do menor para o maior.

numeros.sort();
console.log(numeros);

// Retire o primeiro numero desta lista.

numeros.shift();
console.log(numeros);

// Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

numeros.reverse();
console.log(numeros);

// ================ Crie uma string que contenha o dia de hoje ================

let hoje = "08/02/2025";

// Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

const [dia, mes, ano] = hoje.split("/");

console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);

// Forma simples

// Slice - É usado para extrair parte de uma string, com base nos índices de início e fim que você passa como argumentos.

let today = "08/02/2025";

/**
    A string hoje é "08/02/2025".

    O índice 0 é o início da string ("0").

    O índice 2 é o caractere após o segundo dígito ("/").

    Portanto, hoje.slice(0, 2) extrai os caracteres dos índices 0 a 1, resultando em "08".
 */

let day = today.slice(0, 2);
let month = today.slice(3, 5);
let year = today.slice(6, 10); 

console.log(day);
console.log(month);
console.log(year);
