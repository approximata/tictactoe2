'use strict'

import test from 'ava'
import gameLogic from './gameLogic.js'


test('set element is working', t => {
  const testGame = gameLogic(() => {})
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

test('Is the place empty positive', t => {
  const testGame = gameLogic(() => {})
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


test('Is there any place positive', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['','x',''],
    ['','',''],
    ['','',''],
  ]
  t.true(testGame.isAnyEmptyPlace(table))
})

test('Is there any place negative', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','x','x'],
    ['x','x','x'],
    ['x','x','x'],
  ]
  t.false(testGame.isAnyEmptyPlace(table))
})

test('Is the line win positive', t => {
  const testGame = gameLogic(() => {})
  const line = ['x','x','x']

  t.true(testGame.isLineWin(line))
})

test('Is any row win positive', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','','x'],
    ['x','','x'],
    ['x','','x'],
  ]
  t.false(testGame.isAnyRowWin(table))
})

test('Is any row win negative', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','x','x'],
    ['x','','x'],
    ['x','','x'],
  ]
  t.true(testGame.isAnyRowWin(table))
})

test('Is any column win positive', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','','x'],
    ['','','x'],
    ['x','','x'],
  ]
  t.true(testGame.isAnyColumnWin(table))
})

test('diagonal is win', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','',''],
    ['','x','x'],
    ['x','','x'],
  ]
  t.true(testGame.isAnyDiagonalWin(table))
})

test('diagonal is not win', t => {
  const testGame = gameLogic(() => {})
  const table = [
    ['x','','x'],
    ['','','x'],
    ['x','',''],
  ]
  t.false(testGame.isAnyDiagonalWin(table))
})
