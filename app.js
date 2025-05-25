const submit = document.querySelector(".submit");
const inputEl = document.querySelector(".input-el")


submit.addEventListener("click", (e) => {
    e.preventDefault();
    alert("submit clicked!")
})