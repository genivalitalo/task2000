const buttonTask = document.querySelector(".new-task-button");
const inputTask = document.querySelector(".new-task-input");
const taskContainer = document.querySelector(".tasks-container");
const deleteTaskButton = document.querySelector('.button-remover-task')

// Validação de input, caso esteja vázio
const inputIsValid = () => inputTask.value.trim().length > 0;

// Criação de tarefa
const handleTask = () => {
  // Validar input antes
  const inputValid = inputIsValid();
  if (!inputValid) {
    inputTask.classList.add("valid-input");
  }
  // Adicionar a uma lista
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerHTML = inputTask.value;
  // Marcar como completa
  taskContent.addEventListener("click", (event) => {
  event.target.classList.toggle("completed");
  
});

  const deleteItem = document.createElement("button");
  deleteItem.classList.add("button-remover-task");
  deleteItem.innerHTML = "Remover";

  // Colando os elementos dentro da DIV
  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  console.log({ taskItemContainer });

  // Adicionando na minha DIV task-container
  if (inputTask.value === "") {
    alert("Adicione um nome para sua tarefa");
  } else {
    taskContainer.appendChild(taskItemContainer);
  }

  // Limpar input
  inputTask.value = "";
};

// Button chamar função
buttonTask.addEventListener("click", handleTask);
// Remover a classe quando digitar algo
inputTask.addEventListener("change", () => {
  inputTask.classList.remove("valid-input");
});