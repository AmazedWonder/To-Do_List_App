const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

console.log(listContainer)

document.getElementById("add-btn").addEventListener("click", addTask);

// Add an event listener to the document for the 'keydown' event. This listener will 
// be triggered whenever a key is pressed while the document is focused.
addEventListener("keydown", (e) => {
    // Check if the key pressed is the "Enter" key.
    // The 'e' object represents the event and 'e.key' returns the value of the key that was pressed.
    if(e.key == "Enter"){
        // Call the addTask() function when the "Enter" key is pressed.
        // This function presumably adds a new task to a list or performs a similar action.
        addTask();
    }
})

function addTask(params) {
    if (inputBox.value == ""){
        alert("Please input Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        listContainer.appendChild(li);
        li.appendChild(span);
    }

    inputBox.value == "";
    saveData()
}

// save data to local storage

function saveData(params) {
    localStorage.setItem("data", listContainer.innerHTML)
}