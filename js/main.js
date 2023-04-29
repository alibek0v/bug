// myScript.js

function showOptions() {
  document.getElementById("options").classList.remove("hidden");
  document.getElementById("welcome").classList.add("hidden");
}
// Define constants for the hex container element, file input element, and hex size
const hexContainer = document.getElementById("hex-container");
const fileInput = document.getElementById("file-input");
const hexSize = 40;
var redbug;
var blackbug;
var food;

// Define a function to render a hexagonal grid on the HTML document
function renderGrid(rows) {
  redbug = 0;
  blackbug = 0;
  food = 0;
  console.log(food);
  console.log(blackbug);
  // Clear the hex container
  hexContainer.innerHTML = "";

  // Iterate through the rows of the grid
  for (let i = 2; i < rows.length; i++) {
    // Trim and split the row string to get an array of characters
    const row = rows[i].trim().split(" ");

    // Create a container element for the current row
    const rowContainer = document.createElement("div");

    // Set the left margin of the row container based on whether the row is even or odd
    rowContainer.style.marginLeft = i % 2 == 0 ? "0" : -hexSize / 2 + "px";

    // Iterate through the characters in the current row
    for (let j = 0; j < row.length; j++) {
      // Create a hexagon element
      const hexagon = document.createElement("div");

      // Set the size, background color, and position of the hexagon
      hexagon.className = "hexagon";
      hexagon.style.width = hexSize + "px";
      hexagon.style.height = hexSize + "px";
      hexagon.style.backgroundColor = "#eee";
      hexagon.style.position = "relative";

      // Set the position of the hexagon using x and y coordinates
      const x = j * (hexSize - 5);
      const y = i * hexSize * 0.75;
      hexagon.style.top = y + "px";
      hexagon.style.left = x + "px";

      // Set the id of the hexagon based on its position in the grid
      hexagon.id = `hex-${i}-${j}`;

      // Create an icon element for the hexagon based on its character in the row
      const icon = document.createElement("div");
      if (row[j] == "#") {
        hexagon.style.backgroundColor = "#666";
      } else if (row[j] == ".") {
        hexagon.style.backgroundColor = "#eee";
      } else if (row[j] == "+") {
        hexagon.style.backgroundColor = "#ccc";
      } else if (row[j] == "3") {
        icon.className += " bug";
        icon.innerHTML = "&#x1F41C;";
        redbug++;
        hexagon.style.backgroundColor = "#f00";
      } else if (row[j] == "5") {
        icon.className += " food";
        icon.innerHTML = "&#x1F34E;";
        food++;
        hexagon.style.backgroundColor = "#0f0";
      } else if (row[j] == "9") {
        icon.className += " bug";
        icon.innerHTML = "&#x1F41C;";
        hexagon.style.backgroundColor = "#000";
        blackbug++;
      }

      // Set the position and style of the icon element
      icon.style.position = "absolute";
      icon.style.top = "50%";
      icon.style.left = "50%";
      icon.style.transform = "translate(-50%, -50%)";

      // Append the icon element to the hexagon element
      hexagon.appendChild(icon);

      // Append the hexagon element to the row container element
      rowContainer.appendChild(hexagon);
    }

    // Append the row container element to the hex container element
    hexContainer.appendChild(rowContainer);
  }

  var blackbugValueElement = document.getElementById("blackbugValue");
  blackbugValueElement.textContent = blackbug;
  var redbugValueElement = document.getElementById("redbugValue");
  redbugValueElement.textContent = redbug;
  var foodValueElement = document.getElementById("foodValue");
  foodValueElement.textContent = food;
}

// Add an event listener to the file input element to render the
const form = document.getElementById("render");
form.addEventListener("click", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const rows = reader.result.trim().split("\n");
    renderGrid(rows);
  };
  reader.readAsText(file);
  document.getElementById("options").classList.add("hidden");
  document.getElementById("main-game").classList.remove("hidden");
});

function opt1() {
  document.getElementById("round1").classList.add("hidden");
  document.getElementById("maingame-options").classList.remove("hidden");
}
function backtomain() {
  document.getElementById("maingame-options").classList.add("hidden");
  document.getElementById("round1").classList.remove("hidden");
}
function quit() {
  document.getElementById("round1").classList.add("hidden");
  document.getElementById("yesorno").classList.remove("hidden");
}
function backtomain() {
  document.getElementById("round1").classList.remove("hidden");
  document.getElementById("maingame-options").classList.add("hidden");
  document.getElementById("yesorno").classList.add("hidden");
}
function yesQuit() {
  document.getElementById("gameEnded").classList.remove("hidden");
  document.getElementById("main-game").classList.add("hidden");
}
function restart() {
  document.getElementById("gameEnded").classList.add("hidden");
  document.getElementById("welcome").classList.remove("hidden");
}
