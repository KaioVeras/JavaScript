

// Objetos

let pessoa = {
  nome: "Kaio",
  sobrenome: "veras",
  empresa: "KaioDex",
  cargo: "Programador FullStack",
};

console.log(pessoa.nome);
console.log(pessoa.cargo);

let nome = "Teste";

const {nome: nomePessoa, cargo, empresa, sobrenome} = pessoa;

console.log(nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);

// ========================================================================

// Arrays

let nomes = ["Kaio", "Melinda", "Liz"];

console.log(nomes[0]);

let { 0:meuNome, 1:mel, 2:gordinha } = nomes;

console.log(meuNome); // Kaio
console.log(mel); // Melinda
console.log(gordinha); // Liz


let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(primeiroNome); // Kaio
console.log(segundoNome); // Melinda
console.log(terceiroNome); // Liz






