class Board {
  constructor(size = 8, randomFunc = Math.random) {
    this.size = size;
    this.random = randomFunc;
    this.board = Array.from({ length: size }, () => Array(size).fill(null));
    this.bombs = this.generateBombs();
  }

  generateBombs(count = Math.floor(this.size * this.size * 0.1)) {
    const bombs = new Set();
    while (bombs.size < count) {
      const x = Math.floor(this.random() * this.size);
      const y = Math.floor(this.random() * this.size);
      bombs.add(`${x},${y}`);
    }
    return bombs;
  }
}

module.exports = Board;
