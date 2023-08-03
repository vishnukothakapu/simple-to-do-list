const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const heading = document.querySelector("#heading");
const chk = document.querySelector("#chk");
let day = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
let today = day.toLocaleDateString("en-us", options);
heading.innerHTML = today;
form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        const item = document.createElement("li");
        item.innerHTML = `<span>${text}</span><button>Done</button>`;
        list.appendChild(item);
        input.value = '';
        item.querySelector('button').addEventListener('click', () => {
            item.remove()
        });
    } else {
        alert("Please add something!!");
    }
})