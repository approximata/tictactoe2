'use strict'


export default function gameLogic(){

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
    return line.every(item => item === line[0] && line[0] !== '' )
  }

  function isAnyRowWin(table) {
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

  function isAnyColumnWin(table){
    let rotateTable = transposeTable(table)
    return isAnyRowWin(rotateTable)
  }

  function getDiagonals(table){
    let diagonals = [[],[]]
    const len = table.length
      for (var i = 0; i < len; i++) {
        diagonals[0].push(table[i][i])
        diagonals[1].push(table[len-1-i][i])
      }
      return diagonals
  }

  function isAnyDiagonalWin(table) {
    let diagonals = getDiagonals(table)
    return isAnyRowWin(diagonals)
  }

  return Object.freeze({
    setElement,
    isEmptyPlace,
    isAnyEmptyPlace,
    isLineWin,
    isAnyRowWin,
    isAnyColumnWin,
    isAnyDiagonalWin
  })
}
