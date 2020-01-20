console.log('test load');

let grid;

let w;
let h;

function blankGrid() {
  let r = 5;
  let c = 5;
  let gridArr = [];
  for (let i = 0; i < r; i++) {
    gridArr[i] = [];
    for (let j = 0; j < c; j++) {
      gridArr[i][j] = 0;
      //console.table(gridArr[i][j]);
    }
  }
  //  console.table(gridArr);
  return gridArr;
}

function setup() {
  createCanvas(500, 500);
  w = width / 5;
  h = height / 5;

  grid = blankGrid();

  //console.table(grid);
  //addNumber();
  // addNumber();
  //console.table(grid);
}
//
function addNumber() {
  let options = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (grid[i][j] === 0) {
        options.push({
          x: i,
          y: j
        });
        //grid[i][j] = 100;
      }
    }
  }
  console.log('op', options);
  if (options.length > 0);
  let spot = inputMouse();
  //  console.log('spot', spot);
  // let r = random(1);
  // console.log('r', r);
  grid[spot.x][spot.y] = 100;
  currentValue = grid[spot.x][spot.y];
  checkVal(spot, currentValue, options);
}

function inputMouse() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);

  let mouseMove = ({
    x: i,
    y: j
  });
  return mouseMove;
}

function mousePressed() {
  addNumber();
}

//vertical ตั้ง
// horizontal  นอน
function checkVal(spot, currentValue, options) {
  console.log('checkValBF', spot, currentValue);
  let checkArr = [];

  let verticalArr = [];
  let horizontalArr = [];

  let sumArr = [];

  let cVal = currentValue;
  let afVal = 1;

  if (options.length > 0) {
    for (i in options) {
      if (options[i].x === spot.x) {
        //checkArr.push(options[i]);
        verticalArr.push(options[i]);
      }
      if (options[i].y === spot.y) {
        //checkArr.push(options[i]);
        horizontalArr.push(options[i]);
      }
      // let sumXY = options[i].x + options[i].y;
      // grid[spot.x][spot.y] = cVal - sumXY;

    }

    // for (v in verticalArr) {
    //   let c = Math.abs(verticalArr[v].y - spot.y);
    //   console.log('C', c);
    //   grid[spot.x][verticalArr[v].y] = cVal - c;
    // }
    //
    // for (h in horizontalArr) {
    //   let k = Math.abs(horizontalArr[h].x - spot.x);
    //   console.log('K', k);
    //   grid[horizontalArr[h].x][spot.y] = cVal - k;
    // }

    console.log('cVal', cVal);
    console.log('verCheck', verticalArr);
    console.log('horCheck', horizontalArr);
    console.log('opCheckLength', verticalArr.length);
  }
  console.log('checkVal', spot, currentValue);
}

function draw() {
  background(255);
  drawGrid();
}

function drawGrid() {
  let w = 100;
  let r = 5;
  let c = 5;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      noFill();
      strokeWeight(2);
      stroke(0);
      rect(i * w, j * w, w, w);
      let val = grid[i][j];
      //  if (grid[i][j] != 0) {
      textAlign(CENTER, CENTER);
      textSize(64);
      fill(0);
      noStroke();
      //ดูตำแหน่ง
      //text(i + ',' + j, i * w + w / 2, j * w + w / 2);
      text(val, i * w + w / 2, j * w + w / 2);
      //  }
    }
  }
}