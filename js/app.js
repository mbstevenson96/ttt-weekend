/*------------------------ Constants -----------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*--------------------- Variables (state) ------------------*/
let board, turn, winner
// board = represent state of the squares
// turn = track whose turn it is
// winner = represent if anyone has won yet or if there is a tie


/*---------------- Cached Element References --------------*/
const squareEls = document.querySelectorAll('section > div')
const messageEl = document.getElementById('message')
const resetBtn = document.getElementById('reset')


/*------------------- Event Listeners --------------------*/
squareEls.forEach(square => {
square.addEventListener('click', handleClick)
});

resetBtn.addEventListener('click', (event) => {
  init ()
  messageEl.innerText = "Start Game Player X!"
})

/*----------------------- Functions -----------------------*/
init ()

messageEl.innerText = "Start Game!"

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
    // console.log('sainityyyyyy');
  })
  if (!winner) {
    messageEl.innerText = `Your turn player ${turn === 1 ? "X" : "O"}!`
  }
  else if (winner === 'T') {
    messageEl.innerText = `Tie Game!!!`
  }
  else {
    messageEl.innerText = `Congrats on winning ${winner === 1 ? "X" : "O"}!`
  }
}

function handleClick (event) {
  // what is board and how does it relate to the sqIdx
  // how can we assign this to evt
  let sqIdx = parseInt(event.target.id.replace('sq', ''))
  if (board[sqIdx] || winner) {
    return
  }
  board[sqIdx] = turn
  turn *= -1

  winner = getWinner()

  render ()
}
// console.log('hello', handleClick);

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3)
    return board[winningCombos[i][0]]
  }
  if (board.includes(null)) {
    return null
  } else {
    return "T"
  }
}