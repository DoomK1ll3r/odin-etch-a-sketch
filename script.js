const containerDiv = document.getElementById("container");
const setGridBtn = document.getElementById("set-grid");

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
        aCell.addEventListener("mouseover", () => changeColorCell(aCell));
        aRow.appendChild(aCell);
      }
    }
  }
}

function changeColorCell (aCell) {
  aCell.classList.add("colored-cell");
}

function clear () {
  containerDiv.innerHTML = ``;
}

setGridBtn.addEventListener("click",() => {
  clear();
  createGrid(prompt("Enter the size per side of the grid"));
});
