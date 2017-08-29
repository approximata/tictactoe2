'use strict'

import test from 'ava'
import game from './game.js'


test(t => {
  const testGame = game(() => {})
  const item = {
    'x':0,
    'y':1,
    'type':'x'
  }

  const table = [
    ['','',''],
    ['','',''],
    ['','',''],
  ]

  const expected = [
    ['','x',''],
    ['','',''],
    ['','',''],
  ]

  t.deepEqual(testGame.setElement(table,item), expected)
})

test(t => {
  const testGame = game(() => {})
  const place = {
    'x':0,
    'y':0
  }
  const table = [
    ['','x',''],
    ['','',''],
    ['','',''],
  ]

  t.true(testGame.isEmptyPlace(table, place))
})


test(t => {
  const testGame = game(() => {})
  const table = [
    ['','x',''],
    ['','',''],
    ['','',''],
  ]
  t.true(testGame.isAnyEmptyPlace(table))
})

test(t => {
  const testGame = game(() => {})
  const table = [
    ['x','x','x'],
    ['x','x','x'],
    ['x','x','x'],
  ]
  t.false(testGame.isAnyEmptyPlace(table))
})

test(t => {
  const testGame = game(() => {})
  const line = ['x','x','x']

  t.true(testGame.isLineWin(line))
})

test(t => {
  const testGame = game(() => {})
  const table = [
    ['x','','x'],
    ['x','','x'],
    ['x','','x'],
  ]
  t.false(testGame.isRowWin(table))
})

test(t => {
  const testGame = game(() => {})
  const table = [
    ['x','x','x'],
    ['x','','x'],
    ['x','','x'],
  ]
  t.true(testGame.isRowWin(table))
})
