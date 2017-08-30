'use strict'

function getDiagonals(table){
  let diagonals = [[],[]]
  const len = table.length
    for (var i = 0; i < len; i++) {
      diagonals[0].push(table[i][i])
      diagonals[1].push(table[len-1-i][i])
    }
    return diagonals
}


let gameTable = [
  ['1','x','o'],
  ['','x','x'],
  ['1','','2'],
]

console.log(getDiagonals(gameTable))
