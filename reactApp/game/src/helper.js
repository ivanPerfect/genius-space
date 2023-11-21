export function calculateWinner(score) {
    const Lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < Lines.length; i++) {
      const [a, b, c] = Lines[i];
      if (score[a] && score[a] === score[b] && score[a] === score[c]) {
        return score[a];
      }
    }
    return null;
  }