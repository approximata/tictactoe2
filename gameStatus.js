'use strict'


export default function gameStatus(){
  const board = [
    ['','x',''],
    ['','',''],
    ['','',''],
  ]

  const lastStep = {
    'x':'',
    'y':'',
    'type':''
  }

  return ({
    board,
    lastStep
  })

}
