const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);

function addTask(params) {
    if (inputBox.value == ""){
        alert("Please input Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(span);
        listContainer.appendChild(li);
    }
}