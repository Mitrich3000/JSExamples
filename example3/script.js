let colors = ['cyan', 'gray', 'red', 'orange', 'yellow', 'green',
  'blue', 'purple'];
var colors2 = colors.concat(colors);
var lastCell;
var count = 0;

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

colors2.sort(compareRandom);

var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;
var intervalID = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}

function f() {

  // if first click
  if (lastCell === undefined) {
    lastCell = this.id;
    this.bgColor = colors2[this.id];

    return '0';
  }

  if (colors2[lastCell] === colors2[this.id]) {
    this.bgColor = colors2[this.id];
    lastCell = undefined;
    count++;

    if (count > 7) {
      document.getElementById('form').style.display = 'block';
      document.getElementById('result').innerHTML = +
          pad(parseInt(totalSeconds / 60)) +
        ' минут ' + pad(totalSeconds % 60) + ' секунд';
      clearInterval(intervalID);
    }
    return '1';
  }

  // lastCell = this.id;
  this.bgColor = 'white';
  var lastTd = document.getElementById(lastCell);
  lastTd.bgColor = 'white';
  lastCell = undefined;

}


function addTable() {
  let myTableDiv = document.getElementById('myDynamicTable');
  let table = document.createElement('TABLE');
  table.border = '1';
  let tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (let i = 0; i < 4; i++) {
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let j = 0; j < 4; j++) {
      let td = document.createElement('TD');
      td.width = '75';
      td.height = '75';
      td.onclick = f;
      td.id = 4 * i + j;
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}

addTable();
