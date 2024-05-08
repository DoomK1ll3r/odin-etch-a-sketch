const containerDiv = document.getElementById("container");

function createGrid (size = 0) {
  if (size > 100) {
    alert("The limit of the grid is 100 per side!");
    return;
  }
  else {
    for (let i = 0; i < size; i++) {
      const aCell = document.createElement("div");
      containerDiv.appendChild(aCell);
    }
  }
}

createGrid(10);
