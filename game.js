'use strict'

//import gameStatus from "./gameStatus"


const canvasContext = document.getElementById("canvas").getContext("2d");

const TILESIZE = 3;
const TILEBORDER_WIDTH = 2;
const TOTAL_BORDERLINES = (TILESIZE * 2) - 2;
const BOARDWIDTH = 600;
const BOARDHEIGHT = 600;
const SPACING = BOARDWIDTH / (TOTAL_BORDERLINES/2 + 1);

function initBoard(){
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < TOTAL_BORDERLINES; i++){
    if(i < TOTAL_BORDERLINES/2){
      canvasContext.fillRect(SPACING * (i + 1),0, TILEBORDER_WIDTH, BOARDHEIGHT);
    }else{
      canvasContext.fillRect(0,SPACING * (i - TOTAL_BORDERLINES/2 + 1), BOARDWIDTH, TILEBORDER_WIDTH);
    }
  }
}

function getMiddle(row, column){
  const cellSize = BOARDWIDTH / TILESIZE
  const middleX = column * cellSize + cellSize/2
  const middleY = row * cellSize + cellSize/2
  return [middleX, middleY]
}

function drawX(coords) {
  // https://stackoverflow.com/questions/12835531/draw-x-word-use-canvas-html
  console.log(coords);
  let x = coords[0]
  let y = coords[1]
  canvasContext.beginPath()
  canvasContext.lineWidth = 2
  canvasContext.moveTo(x - 20, y - 20)
  canvasContext.lineTo(x + 20, y + 20)

  canvasContext.moveTo(x + 20, y - 20)
  canvasContext.lineTo(x - 20, y + 20)
  canvasContext.stroke();
}

function drawO(coords){
  let x = coords[0]
  let y = coords[1]
  canvasContext.beginPath();
  canvasContext.lineWidth = 2
  canvasContext.arc(x,y,27,0,2*Math.PI);
  canvasContext.stroke();
}

function draw(row, column, item){
  console.log('drawinit');
  if(item === '') return
  if(item === 'x') {
    drawX(getMiddle(row, column))
  }
  if(item === 'y') {
    drawO(getMiddle(row, column))
  }
}

function render(table){
  console.log('init');
  table.forEach((row, rowIndex) => row.forEach((item, columnIndex) => draw(rowIndex, columnIndex, item)))
}

initBoard()
render([
  ['x','',''],
  ['','x','x'],
  ['x','','x'],
])
