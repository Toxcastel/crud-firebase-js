import { saveTask, getTasks, onGetTasks, deleteTask, updateTask, getTask } from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async () => {
    
    onGetTasks((querySnapshot) => {
        tasksContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            
            const task = doc.data();
            // ojo: es recomendable crear elementos html con dom para evitar ataques cros site scripting
            tasksContainer.innerHTML += `
        <div class="card card-body mt-2 border-primary">
            <h3 class="h5">${task.title}</h3>
            <p>${task.description}</p>
            <div class="d-flex">
            <button class='btn btn-primary btn-delete' data-id="${doc.id}">Delete</button>
            <button class='btn btn-secondary btn-edit' data-id="${doc.id}">Edit</button>
            </div>
        </div>`;
        });

        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");

        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", ({ target: { dataset } }) => {
                // forma compacta de escribir event.target.dataset -> {target: {dataset}} "destructurado"
                deleteTask(dataset.id);
            });
        });

        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                // consulto datos a la base
                const doc = await getTask(dataset.id);
                const task = doc.data();
                // relleno de datos
                taskForm["task-title"].value = task.title;
                taskForm["task-description"].value = task.description;

                editStatus = true;
                id = dataset.id;

                taskForm["btn-task-save"].innerText = "Update";
            });
        });
    });
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];

    if (editStatus) {
        updateTask(id, { title: title.value, description: description.value });
        editStatus = false;
        taskForm["btn-task-save"].innerText = "Save";
    } else saveTask(title.value, description.value);

    taskForm.reset();
});
