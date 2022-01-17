const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
const msg = document.getElementById('msgError');

form.onsubmit = function(event){
	event.preventDefault();
	const inputField = document.getElementById('task-input');
    if (inputField.value === ""){
        msgError.textContent = "Insira uma Tarefa";
    }else{
        addTask(inputField.value);
        msgError.textContent = "";
    }
	form.reset();
}

function addTask(description){
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	taskLabel.setAttribute('for', description);

    taskContainer.classList.add('task-item');
    
	taskLabel.appendChild(taskDescriptionNode);
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);
	taskList.appendChild(taskContainer);
}