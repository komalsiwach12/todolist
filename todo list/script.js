const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✖";
    removeBtn.className = "remove";

    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

// Click the Add button
addBtn.addEventListener("click", addTask);

// Or press Enter key
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});