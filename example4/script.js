let lastCell;
let lastColor;
let tempTdIds = [];
let tempTdColors = [];


function computation(row, col) {
  if (tempTdIds) {
    for (let i = 0; i < tempTdIds.length; i++) {
      td = document.getElementById(tempTdIds[i]);
      td.style.backgroundColor = tempTdColors[i];
    }
  }
  let horizontal = [2, 1, -1, -2, -2, -1, 1, 2];
  let vertical = [-1, -2, -2, -1, 1, 2, 2, 1];
  let i, j = 0;
  for (i = 0; i < horizontal.length; i++) {
    let x = row + horizontal[i];
    let y = col + vertical[i];
    // проверка на доступность
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
      let id = (x - 1) * 8 + y;
      var td = document.getElementById(id);
      tempTdIds[j] = id;
      tempTdColors[j] = td.style.backgroundColor;
      td.style.backgroundColor = 'green';
      j++;
    }
  }

}

function f() {
  computation(this.parentNode.rowIndex, this.cellIndex);
  this.style.backgroundColor = 'blue';

  if (lastCell === undefined) {
    lastCell = this.id;
    lastColor = this.bgColor;

    return;
  }

  var lastTd = document.getElementById(lastCell);
  lastTd.style.backgroundColor = lastColor;
  lastCell = this.id;

}


function chessboard1() {
  var newTable = document.createElement('table'),
    lets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

  for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    var newTr = newTable.insertRow(i);
    for (var j = 0; j < 10; j++) {
      var newTd = newTr.insertCell(j);
      if ((j > 0 && i > 0) && (j < 9 && i < 9)) {
        newTd.onclick = f;
        newTd.id = (i - 1) * 8 + j;
      }

      switch (i) {
        case 0:
          newTd.innerText = lets[j];
          break;
        case 9:
          newTd.innerText = lets[j];
          break;
        default:
          if (j === 0 || j === 9) {
            newTd.innerHTML = a;
          }
          break;
      }
    }
  }
  document.body.appendChild(newTable);
}
