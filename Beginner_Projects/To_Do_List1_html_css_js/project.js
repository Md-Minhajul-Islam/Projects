const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("todolist"));
// to show after every refresh
list.forEach(task => {
    toDoList(task);
});

formEl.addEventListener("submit", (event) => {
    
    //prevent page to be refreshed automatically
    event.preventDefault();
    toDoList();
});

function toDoList(task) {

    //creating list
    let newTask = inputEl.value;
    if (task) newTask = task.name;

    const liEl = document.createElement("li");
    
    if (task && task.checked) {
        liEl.classList.add("checked");
    }
    liEl.innerText = newTask;
    ulEl.appendChild(liEl)
    inputEl.value = "";
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkBtnEl);
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtnEl);

    //toggle check box
    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });
    //deleting list
    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}
// update local storage
// so that items won't remove after refreshed
function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");

    // everytime overwriting the list
    // so that multiple array won't save in the local storage
    let todolist = [];
    liEls.forEach(el => {
        todolist.push({
            name: el.innerText,
            checked: el.classList.contains("checked")
        })
    });
    localStorage.setItem("todolist", JSON.stringify(todolist));
}


