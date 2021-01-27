const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", function() {
        var cell = document.getElementsByClassName("grid-item");
        cell[1].className = cell[1].className.replace(" ativo", "");
        this.className += " ativo";
      })
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(7, 7);