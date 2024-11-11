// Trabalhando com switch

function pedir() {
    let pedido = Number(prompt('Digite um número entre 1 e 4: '));

    switch(pedido){
        case 1: 
            alert('Você escolheu suco de uva');
            break;
        case 2: 
            alert('Você ecolheu água gelada');
            break;
        case 3:
            alert('Você escolheu energético');
            break;
        case 4: 
            alert('Você chamou o garçom');
            break;
        default:
            alert('Por favor, digite um número entre 1 e 4');
            break;
    }
}