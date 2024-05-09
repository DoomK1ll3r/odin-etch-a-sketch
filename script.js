const containerDiv = document.getElementById("container");

function createGrid (size = 0) {
  if (size > 100) {
    alert("The limit of the grid is 100 per side!");
    return;
  }
  else {

    for (let i = 0; i < size; i++) {
      const aRow = document.createElement("div");
      aRow.classList.add("row-div");
      containerDiv.appendChild(aRow);

      for (let j = 0; j < size; j++) {
        const aCell = document.createElement("div");
        aCell.classList.add("cell-div");
        aRow.appendChild(aCell);
      }
    }
  }
}

createGrid(10);
