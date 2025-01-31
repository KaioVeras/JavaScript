let listElement = document.querySelector("#areaList ul");
let textTask = document.querySelector("#areaText input");
let buttonAdd = document.querySelector("#areaText button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas"));

function renderTasks() {
  listElement.innerHTML = "";

  tarefas.map((task) => {
    let liElement = document.createElement("li");
    let liText = document.createTextNode(task);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(task);
    liElement.setAttribute("onclick", `deleteTask(${posicao})`);

    listElement.appendChild(liElement);
    liElement.appendChild(liText);
    liElement.appendChild(linkElement);
  });
}

renderTasks();

function addTasks() {
  if (textTask.value === "") {
    alert("Por favor, digite uma tarefa!");
    return false;
  } else {
    let nameTask = textTask.value;

    tarefas.push(nameTask);
    textTask.value = "";

    renderTasks();
    saveData();
  }
}

buttonAdd.onclick = addTasks;

function deleteTask(posicao) {
  tarefas.splice(posicao, 1);

  renderTasks();
  saveData();
}

function saveData() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
