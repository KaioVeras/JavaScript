// Trabalhando com arrays

let area = document.getElementById('area');

let lista = ['Kaio', 'Melinda', 'Liz', 21];
//console.log(lista);


// Adicionando e retirandio itens de um array

lista.push('Danilo'); // Adicionar itens ao final do array
lista.unshift('Thaiane'); // Adicionar itens no inicio da lista
//console.log(lista);

lista.pop(); // Retirar item do final do array
lista.shift() // Retirar item do início do array
//console.log(lista);


// Tranformando o array em string e seprando o itens

lista.join('/'); // Por padrão separa usando vírgula, mas o separador ficar por sua escolha

lista.toString(); // Separa usando apenas vírgula


// Concatenando/Mesclando arrays

let familiaMae = ['Thaiane', 'Guilherme', 'Liz'];
let familiaPai = ['Danilo', 'Crys', 'Melinda'];

let familiaKaio = familiaPai.concat(familiaMae); // Ele não altera os arrays origiais apenas os utiliza para criar um novo

//console.log(familiaKaio);




