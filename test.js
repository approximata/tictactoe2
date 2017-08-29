'use strict'

// function isAnyEmptyPlace(table) {
//   let arr = []
//   table.forEach((row) => {
//     arr.push(...row)
//   })
//   return arr.some(item => item === '')
// }

function isAnyEmptyPlace(table) {
  // let arr = []
  // table.forEach((row) => {
  //   arr.push(...row)
  // })
  return table.some(row => (row.some(item => item === '')))
}


let gameTable = [
  ['','x',''],
  ['','','x'],
  ['x','',''],
]

console.log(isAnyEmptyPlace(gameTable))
