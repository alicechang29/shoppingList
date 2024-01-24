const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
const errorMessage = document.getElementById("errorMessage");
const itemList = [];

//creating a function to add items to the list
function addItem() {
  let currentValue = input.value;
  input.value = "";

  // Check for duplicates
  if (itemList.includes(currentValue)) {
    errorMessage.textContent = "Item already exists in the list";
    return; // Don't proceed to create the list item if it's a duplicate
  } else {
    errorMessage.textContent = ""; // Clear error message
  }

  const listItem = document.createElement("li");

  const span = document.createElement("span");
  //adding text content
  if (currentValue) {
    span.textContent = currentValue;
    listItem.appendChild(span);
    errorMessage.textContent = ""; // Clears error message
  } else {
    errorMessage.textContent = "Please enter an item";
    return;
  }

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", function () {
    ul.removeChild(listItem);
    let deleteIndex = itemList.indexOf(currentValue);
    if (deleteIndex !== -1) {
      itemList.splice(deleteIndex, 1);
    }
  });
  listItem.appendChild(deleteButton);

  ul.appendChild(listItem);
  itemList.push(currentValue);
  input.focus();
}
// Event listener for the "Add item" button click
button.addEventListener("click", addItem);

// Event listener for the "Enter" key press on the input field
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});
