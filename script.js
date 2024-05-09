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
  const redC = Math.floor(Math.random() * 256);
  const greenC = Math.floor(Math.random() * 256);
  const blueC = Math.floor(Math.random() * 256);

  if(aCell.classList[1] != "colored-cell") {
    aCell.classList.add("colored-cell");
    aCell.style.backgroundColor = `rgb(${redC}, ${greenC}, ${blueC})`;
  }

  aCell.style.opacity -= '-0.1';
}

function clear () {
  containerDiv.innerHTML = ``;
}

setGridBtn.addEventListener("click",() => {
  clear();
  createGrid(prompt("Enter the size per side of the grid"));
});
