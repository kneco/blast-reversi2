const test = require('node:test');
const assert = require('node:assert');
const Board = require('../src/board.js');

function seededRandom(seed) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

test('Board uses injected random generator for reproducible bombs', () => {
  const rng1 = seededRandom(42);
  const board1 = new Board(8, rng1);
  const bombs1 = Array.from(board1.bombs);

  const rng2 = seededRandom(42);
  const board2 = new Board(8, rng2);
  const bombs2 = Array.from(board2.bombs);

  assert.deepStrictEqual(bombs1, bombs2);
});
