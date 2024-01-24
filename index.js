const taskListElement = document.querySelector(".taskList");
const taskNameInput = document.querySelector("#taskName");
const addTaskButton = document.querySelector("#addTask");
const errorMsgElement = document.querySelector(".errorMsg");

let taskList = [];

addTaskButton.addEventListener("click", (e) => {
	e.preventDefault();
	errorMsgElement.innerHTML = "";

	if (taskList.includes(taskNameInput.value)) {
		errorMsgElement.innerHTML = "<p>Task already exist</p>";
		return null;
	}

	taskList.push(taskNameInput.value);
	renderList();
})


function renderList() {
	taskListElement.innerHTML = taskList.map((task, pos) => {
		return `<li>${task} <button class="deleteButton" onClick="deleteTask(${pos})">Delete</button><button class="editButton">Edit</button></li>`;
	}).join('');
}

function deleteTask(pos) {
	taskList.splice(pos, 1);
	renderList();
}