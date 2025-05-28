
const submitBtn = document.querySelector(".submit");
const inputEl = document.querySelector(".input-el")
const toDoContainer = document.querySelector(".todo-container")

let idIndex = 0;

// EVENT LISTENER
submitBtn.addEventListener("click", submitToDo);

// FUNCTIONS

// SUBMIT TODO FN
function submitToDo(e){

    e.preventDefault();
    const value = inputEl.value;

    if (value){
        createToDoElement(value);
    }else{
        alert("input empty, write your todo")
    }
}

// CREATE TODO ELEMENT FN

function createToDoElement(value) {

    // created a todo element and added a class "todo".
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("id", `id${idIndex}`)

    // add the value to local storage
    localStorage.setItem(`id${idIndex}`, value);


    // create a button and add the class "check"
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");
    checkBtn.addEventListener("click", checkToDo)

    // create the image check icon and set src and alt attributes
    const checkImg = document.createElement("img");
    checkImg.setAttribute("src", "images/check.svg");
    checkImg.setAttribute("alt", "check icon");

    //append the check img to the check button element
    checkBtn.appendChild(checkImg);

    // create the input and set the value and type attributes and disable the element
    const todoInput = document.createElement("input");
    todoInput.setAttribute("value", `${value}`);
    todoInput.setAttribute("type", "text");
    todoInput.disabled = true;
    todoInput.classList.add("todo-display");

    // create the button container, the buttons and their images.
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    // >> create the edit button
    const editToDoBtn = document.createElement("button");
    editToDoBtn.classList.add("edit")
    editToDoBtn.addEventListener("click", editToDo)
    
    const editImg = document.createElement("img");
    editImg.setAttribute("src", "images/edit.svg");
    editImg.setAttribute("alt", "edit icon");

    editToDoBtn.appendChild(editImg);

    // >> create the delete button
    const deleteToDoBtn = document.createElement("button");
    deleteToDoBtn.classList.add("delete");
    deleteToDoBtn.addEventListener("click", deleteToDo)
    
    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "images/delete.svg");
    deleteImg.setAttribute("alt", "delete icon");

    deleteToDoBtn.appendChild(deleteImg);

    // append the edit and delete buttons to the buttons container
    buttonContainer.appendChild(editToDoBtn);
    buttonContainer.appendChild(deleteToDoBtn);

    // append the check button, todo input and the buttons to the todo element
    todo.appendChild(checkBtn);
    todo.appendChild(todoInput);
    todo.appendChild(buttonContainer);

    // append the todo element into the todo container.
    toDoContainer.appendChild(todo)
              
    // reset the input value of the input element
    inputEl.value = "";
    idIndex++;
}


// CHECK TODO FN

function checkToDo(e) {
    e.preventDefault();
    const parentContainer = e.target.parentElement.parentElement;
    // console.log(parentContainer)
    const id = parentContainer.id;

    // if the id of the todo container is equal to the current ID and the todo container does not contain the checked class add the check class to the todo container otherwise remove it.
    if(`id${idIndex} === id` && !parentContainer.classList.contains("checked")){
        parentContainer.classList.add("checked");
    }else{
        parentContainer.classList.remove("checked");
    }
}


// DELETE TODO FN

//find the todo ID and compare to the current idIndex and if they match remove the target todo and remove the corresponding todo on localhost

function deleteToDo(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.parentElement.id;

    if(`id${idIndex} === id`){
        e.target.parentElement.parentElement.parentElement.remove();
        // remove item from local storage
        localStorage.removeItem(id);
    }
}


// EDIT TODO FN

function editToDo(e) {
    // preventing the page refresh
    e.preventDefault();

    // changing the disabled to false when the edit button is pressed.
    document.querySelector(".todo-display").disabled = false;

    // changing the diabled to true when the button is pressed again.
}