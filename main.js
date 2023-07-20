// Variables Declaration 
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#tasks");

// Fire Events on Actions

toDoForm.addEventListener("submit", e => {
    e.preventDefault();
    if (toDoInput.value === "") {
        alert("Please Enter a task");
        return false;
    }
    else if (toDoInput.value.length > 30) {
        alert("Task should not exceeds 20 character");
        return false;
    }
    const task = document.createElement("li");
    toDoList.appendChild(task);
    task.innerHTML = toDoInput.value;
    // Clear Input Field after adding Task
    toDoInput.value = "";
    // create actions Buttons
    const div = document.createElement("div");
    div.contentEditable = false;
    task.appendChild(div);
    const editBtn = document.createElement("span");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
        if (editBtn.innerHTML.toLowerCase() === "edit") {
            task.contentEditable = true;
            task.focus();
            editBtn.innerHTML = "save";
        } else {
            task.contentEditable = false;
            editBtn.innerHTML = "Edit";
        }
    })
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "Remove";
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        toDoList.removeChild(task);
    })

});
