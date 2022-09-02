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



/*------------------- Event Listeners --------------------*/
squareEls.forEach(square => {
square.addEventListener('click', handleClick)
});

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
    // console.log('sainityyyyyy');
  })
  if (!winner) {
    messageEl.innerText = `Your turn player ${turn === 1 ? "X" : "O"}!`
  }
  else if (winner === 'T') {
    messageEl.innerText = `Tie Game!!!`
  }
  else {
    messageEl.innerText = `Congratulations on winning ${winner === 1 ? "X" : "O"}!`
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
  turn *= -1;

  let winner

  if(winner) {
    getWinner()
  }
}


// function getWinner() {
//   let total = 0
//   for (let i = 0; i < winningCombos[i].length; i++) {
//     total += (-1 *(winningCombos[i][0] + winningCombos[i][1] + winningCombos[i][2]))

//     console.log('total is', total);

//     if (total === 3) {
//       (winner)
//     }
//   }
// }