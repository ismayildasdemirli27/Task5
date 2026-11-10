const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");

const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let nextId = 1;
let currentFilter = "all";

function loadTasksFromStorage() {
    try {
        const stored = localStorage.getItem("tasks");
        if (stored) {
            tasks = JSON.parse(stored);
            if (tasks.length > 0) {
                nextId = Math.max(...tasks.map((t) => t.id)) + 1;
            }
        }
    } catch (e) {
        console.error("Could not load tasks from localStorage:", e);
        tasks = [];
    }
}

function saveTasksToStorage() {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
        console.error("Could not save tasks to localStorage:", e);
    }
}

function updateCounters() {
    totalTasks.textContent = `Total: ${tasks.length}`;
    const completedCount = tasks.filter((t) => t.completed).length;
    completedTasks.textContent = `Completed: ${completedCount}`;
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (task.completed) {
        li.classList.add("completed");
    }
    li.dataset.id = task.id;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("task-content");

    const iconSpan = document.createElement("span");
    iconSpan.classList.add("task-status-icon");
    iconSpan.textContent = task.completed ? "✓" : "○";

    const textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.textContent = task.text;

    contentDiv.append(iconSpan, textSpan);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("task-actions");

    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.classList.add("btn-complete");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.dataset.action = "complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.action = "delete";

    actionsDiv.append(completeBtn, deleteBtn);

    li.append(contentDiv, actionsDiv);
    return li;
}

function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter((task) => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        const emptyMsg = document.createElement("li");
        emptyMsg.classList.add("empty-task-msg");
        if (tasks.length === 0) {
            emptyMsg.textContent = "No tasks yet. Add one above!";
        } else {
            emptyMsg.textContent = `No ${currentFilter} tasks found.`;
        }
        taskList.append(emptyMsg);
    } else {
        filteredTasks.forEach((task) => {
            const taskEl = createTaskElement(task);
            taskList.append(taskEl);
        });
    }

    updateCounters();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (!text) {
        return;
    }

    const newTask = {
        id: nextId++,
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasksToStorage();

    input.value = "";
    input.focus();
    renderTasks();
});

taskList.addEventListener("click", (e) => {
    const target = e.target;
    const action = target.dataset.action;

    if (!action) return;

    const taskItem = target.closest(".task-item");
    if (!taskItem) return;

    const taskId = Number(taskItem.dataset.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) return;

    if (action === "complete") {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasksToStorage();
        renderTasks();
    }

    if (action === "delete") {
        tasks.splice(taskIndex, 1);
        saveTasksToStorage();
        renderTasks();
    }
});

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

loadTasksFromStorage();
renderTasks();
