const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

document.getElementById("add-btn").addEventListener("click", addTask)

function addTask(params) {
    if (inputBox.value == ""){
        alert("Please input Task")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
    }
}