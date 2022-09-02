/*------------------------ Constants -----------------------*/
const winningCombos = [
  [board[0], board[1], board[2]],
  [board[0], board[3], board[6]],
  [board[0], board[4], board[8]],
  [board[1], board[4], board[7]],
  [board[2], board[4], board[6]],
  [board[2], board[5], board[8]],
  [board[3], board[4], board[5]],
  [board[6], board[7], board[8]]
];


/*--------------------- Variables (state) ------------------*/
let board, turn, winner
// board = represent state of the squares
// turn = track whose turn it is
// winner = represent if anyone has won yet or if there is a tie


/*---------------- Cached Element References --------------*/
const squareEls = document.querySelectorAll('.boardSquares')

const messageEl = document.getElementById('message')



/*------------------- Event Listeners --------------------*/



/*----------------------- Functions -----------------------*/
init ()

function init(){
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render ()
}

function render () {
  board.forEach((square, idx) => {
    squareEls[idx].innerText = square
    if (square === null) {
      squareEls[idx].innerText = ''
    }
    if (square === 1) {
      squareEls[idx].innerText = 'X'
    }
    if (square === -1) {
      squareEls[idx].innerText = 'O'
    }
  })
  if (winner) {
  return `Congrats player, ${square}`
  }
  else if (!winner) {
    return `Next move, ${square}`};
  else (winner === 'T') {
    return 'Tie Game!'
  }
}


