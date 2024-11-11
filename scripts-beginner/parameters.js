// Trabalhando com parâmetros

var area = document.getElementById("area");

function mediaAluno(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media >= 6) {
    area.innerHTML = `Aluno aprovado com média: ${media}`;
  } else {
    area.innerHTML = `Aluno reprovado com média:  ${media}`;
  }
}

mediaAluno(6, 8);

function aluno(nome, curso) {
  let mensagens = `Seja bem vindo ${nome} ao curso de ${curso}`;
  area.innerHTML = mensagens;
}

aluno('Kaio Veras', 'Javascript');
