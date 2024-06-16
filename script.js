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

// Function to add a task to the list
function addTask(params) {

    // Check if the input field (inputBox) is empty
    if (inputBox.value == ""){
        // Alert the user to input a task if the input field is empty
        alert("Please input Task");
    }else{
        // Create a new list item (li) element
        let li = document.createElement("li");
        // Set the inner HTML of the list item to the value from the input box
        li.innerHTML = inputBox.value;
        // listContainer.appendChild(li);

        // Create a new span element to hold the delete icon
        let span = document.createElement("span");
        // Set the inner HTML of the span to a trash icon (font-awesome icon)
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        // Append the newly created list item to the list container
        listContainer.appendChild(li);
        // Append the span (containing the delete icon) to the list item
        li.appendChild(span);
    }

    // Reset the input box to an empty string
    inputBox.value = "";
    // Call the saveData function to presumably save the current state of the tasks
    saveData()
}

// save data to local storage

function saveData(params) {
    // Save the current HTML of the listContainer to localStorage under the key "data"
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) => {
    // Check if the clicked element is a list item (LI)
    if(e.target.tagName.toUpperCase() === "LI"){
        // Toggle the "checked" class on the clicked list item
        e.target.classList.toggle("checked")
        // Save the updated state to localStorage
        saveData()
    }
    // Check if the clicked element is a span (SPAN)
    else if(e.target.tagName.toUpperCase() === "SPAN"){
        // Remove the parent element (the list item) of the clicked span
        e.target.parentElement.remove()
        // Save the updated state to localStorage
        saveData()
    }
})

// fetch data from local storage

function showTask(params) {
    // Retrieve the saved task list from localStorage and set it as the innerHTML of the listContainer
    listContainer.innerHTML= localStorage.getItem("data")
}

// Immediately call the showTask function to display the tasks when the script runs
showTask()