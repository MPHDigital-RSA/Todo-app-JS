 <!-- to create html elements and append then to the todos container -->

# Problem 1

after creating the todo elements dynamically, i faced the identity challenge when pressing buttons i need a dynamically generated method of identifying the element the event listener is attached to and #check, #edit or #delete 

# solution
i added a custom id when ever a todo is created to the todo-container,

for every button pressed i track that element 
const parentContainer = event.target.parentElement.parentElement;

after finding the parent id i compare to the current id, if they match i then take action.


# Local storage

how to implement local storage?
localStorage.setItem("key", "value")

how to add and retreive todos for the local storage?