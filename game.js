'use strict'


export default function game(){

  function setElement(table, item) {
    table[item.x][item.y] = item.type
    return table
  }

  function isEmptyPlace(table, place) {
    return table[place.x][place.y] === ''
  }

  function isAnyEmptyPlace(table) {
    return table.some(row => (row.some(item => item === '')))
  }

  function isLineWin(line) {
    return line.every(item => item === line[0])
  }

  function isRowWin(table) {
    return table.some(row => isLineWin(row))
  }

  function transposeTable(table){
    let columns = [];
      for (let s = 0; s < table.length; s++) {
        columns.push([]);
      }
       for (var r = 0; r < table.length; r++) {
         for (var c = 0; c < table.length; c++) {
           columns[c].push(table[r][c]);
         }
       }
    return columns;
  }

  return Object.freeze({
    setElement,
    isEmptyPlace,
    isAnyEmptyPlace,
    isLineWin,
    isRowWin
  })
}
