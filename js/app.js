/*------------------------ Constants -----------------------*/



/*--------------------- Variables (state) ------------------*/
let board, turn, winner
// board = represent state of the squares
// turn = track whose turn it is
// winner = represent if anyone has won yet or if there is a tie


/*---------------- Cached Element References --------------*/
const squareEls = document.querySelector('.boardSquares')
const messageEl = document.getElementById('message')



/*------------------- Event Listeners --------------------*/



/*----------------------- Functions -----------------------*/
init ()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render ()
}

function render () {
  
}


