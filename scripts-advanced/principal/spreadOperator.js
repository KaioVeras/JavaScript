// // Spread Operator

let primeiro = [1, 3, 5];

let segundo = [...primeiro, 2, 4, 6];
console.log(segundo);

let pessoa = {
  nome: "Kaio",
  idade: 17,
  cargo: "RH",
};

let novaPessoa = {
  ...pessoa,
  status: "ativo",
  cidade: "Brasília / DF",
  telefone: "619898989898",
};

console.log(novaPessoa);

function novoUser(info) {
  let dados = {
    ...info,
    status: "Ativo",
    inicio: "20/03/2023",
    codigo: "14032007",
  };

  console.log(dados);
  
}

novoUser({ nome: "Kaio", sobrenome: "Veras", cargo: "Dev" });
