
// Conhecendo includes, startsWith e endsWith

// Includes = ver se algo está incluso

let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Maria"));

if (nomes.includes("Maria")) {
  console.log("Está na lista!");
} else {
  console.log("Não está na lista!");
}

// StartsWith = verificar o inicio de palavras ou frases

let nome = "Matheus";

console.log(nome.startsWith("Mat"));

// EndsWith = verifica o final de palavras ou frases

console.log(nome.endsWith("eus"));
