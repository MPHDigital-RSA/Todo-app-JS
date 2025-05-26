
const submitBtn = document.querySelector(".submit");
const inputEl = document.querySelector(".input-el")
const toDoContainer = document.querySelector(".todo-container")

// event listners
submitBtn.addEventListener("click", submitToDo);

// FUNCTIONS

function submitToDo(event){
    event.preventDefault();
   
    const value = inputEl.value;

    if (value){
        // created a todo element and added a class "todo".
    const todo = document.createElement("div");
    todo.classList.add("todo")

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
    todoInput.setAttribute("disabled", "")

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
    console.log(todo);

    // reset the input value of the input element
    inputEl.value = "";
    }else{
        alert("input empty, write your")
    }
    
}

// check todo fn
const checkToDo = () => {
    alert("check button pressed")
}

// Delete todo fn
const deleteToDo = () => {
    alert("todo deleted")
}
// Edit todo fn
const editToDo = () => {
    alert("todo editted")
}