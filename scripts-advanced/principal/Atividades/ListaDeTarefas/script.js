
// Lista de Tarefas

let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas"));

function renderTasks() {
    listElement.innerHTML = "";

    tarefas.map((task) => {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(task);

        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");
        
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(task);

        linkElement.setAttribute('onclick', `deleteTask(${posicao})`);


        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    });
}

renderTasks();

function addTask() {
    if(inputElement.value === '') {
        alert('Digite alguma tarefa!');
        return false;
    } else {
        let newTask = inputElement.value;
        
        tarefas.push(newTask);
        inputElement.value = '';

        renderTasks();
        saveData();
    }
};

buttonElement.onclick = addTask;

function deleteTask(posicao) {
    tarefas.splice(posicao, 1);
    renderTasks();
    saveData();
}

function saveData() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}