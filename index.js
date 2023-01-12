//STATE
let gameState = {
    players: ['x', 'o'],
    currentPlayer: 'x',
    playerOneName: '',
    playerTwoName:'',
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

// DOM SELECTORS
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const gameBoard = document.getElementById("gameBoard");
const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");
const submit1 = document.getElementById("submit1");
const message =  document.getElementById("message");
const submit2 = document.getElementById("submit2");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const whosTurn = document.getElementById("whosTurn");

//CREATE BOARD
const createGameBoard = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const newDiv = document.createElement("div");
        newDiv.addEventListener('click', (event) => {myTurn(event, i, j)} )
        newDiv.className = "cell";
        gameBoard.appendChild(newDiv);
    }
  }
}

//SWITCH TURNS
const myTurn = (event, row, column) => {
  event.target.innerHTML = gameState.currentPlayer;
  gameState.board[row][column] = gameState.currentPlayer;
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o"
    whosTurn.innerText = `${gameState.playerTwoName} is up next!`
  } else {
    event.target.innerHTML = "o"
    gameState.currentPlayer = "x"
    whosTurn.innerText = `${gameState.playerOneName} is up next!`
  }

  diagWin()
  rowWin()
  columnWin()
}

// PLAYER SUBMISSION FORM
const returnMessage = () => {
  if(player1.value !== '' && gameState.playerOneName === ''  ) {

    gameState.playerOneName = player1.value;
    message.innerHTML = player1.value + " is player one!";
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    playerOneName.innerText = `${player1.value}`;
   
  }
  if (player2.value !== '') {
    gameState.playerTwoName = player2.value;
    message.innerHTML = player2.value + " is player two! Press START to begin!";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerTwoName.innerText = `${player2.value}`
  }

  if (player2.value === '' && player1.value !== '') {
    message.innerHTML = "SINGLE PLAYER? PRESS START!";
  }
}
// BEGIN GAME
const beginGame = () => {
  message.style.visibility = "hidden";
  player1.style.visibility = "hidden";
  submit1.style.visibility = "hidden";
  player2.style.visibility = "hidden";
  submit2.style.visibility = "hidden";
  playerOneName.style.visibility = "hidden";
  playerTwoName.style.visibility = "hidden";
  whosTurn.innerText = `${player1.value}` + " is up first";
}
//WIN CONDITIONS 
const diagWin = () =>{
  console.log(gameState.board)
  if((gameState.board[0][0] === "x" && gameState.board[1][1] === "x" && gameState.board[2][2]=== "x") 
  || (gameState.board[0][2] === "x" && gameState.board[1][1]=== "x" && gameState.board[2][0]=== "x")){
    alert (`${gameState.playerOneName} wins!`)
    whosTurn.innerText = `${gameState.playerOneName} wins!!`
    message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
  }
  if ((gameState.board[0][0] === "o" && gameState.board[1][1] === "o" && gameState.board[2][2]=== "o") 
  || (gameState.board[0][2] === "o" && gameState.board[1][1]=== "o" && gameState.board[2][0]=== "o")){
    alert (`${gameState.playerTwoName} wins!`)
    whosTurn.innerText = `${gameState.playerTwoName} wins!!`
    message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
  }
}

const rowWin = () => {
  if((gameState.board[0][0] === "x" && gameState.board[0][1] === "x" && gameState.board[0][2]=== "x") 
  || (gameState.board[1][0] === "x" && gameState.board[1][1]=== "x" && gameState.board[1][2]=== "x")
  || (gameState.board[2][0] === "x" && gameState.board[2][1]=== "x" && gameState.board[2][2]=== "x")){
    alert (`${gameState.playerOneName} wins!`)
    whosTurn.innerText = `${gameState.playerOneName} wins!!`
    message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
  }
  if((gameState.board[0][0] === "o" && gameState.board[0][1] === "o" && gameState.board[0][2]=== "o") 
  || (gameState.board[1][0] === "o" && gameState.board[1][1]=== "o" && gameState.board[1][2]=== "o")
  || (gameState.board[2][0] === "o" && gameState.board[2][1]=== "o" && gameState.board[2][2]=== "o")){
  alert (`${gameState.playerTwoName} wins!`)
  whosTurn.innerText = `${gameState.playerTwoName} wins!!`
  message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
  }
}
  columnWin = () => {
  if((gameState.board[0][0] === "x" && gameState.board[1][0] === "x" && gameState.board[2][0]=== "x") 
  || (gameState.board[0][1] === "x" && gameState.board[1][1]=== "x" && gameState.board[2][1]=== "x")
  || (gameState.board[0][2] === "x" && gameState.board[1][2]=== "x" && gameState.board[2][2]=== "x")){
    alert (`${gameState.playerOneName} wins!`)
    whosTurn.innerText = `${gameState.playerOneName} wins!!`
    message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
  } 
  if((gameState.board[0][0] === "o" && gameState.board[1][0] === "o" && gameState.board[2][0]=== "o") 
  || (gameState.board[0][1] === "o" && gameState.board[1][1]=== "o" && gameState.board[2][1]=== "o")
  || (gameState.board[0][2] === "o" && gameState.board[1][2]=== "o" && gameState.board[2][2]=== "o")){
    alert (`${gameState.playerTwoName} wins!`)
    whosTurn.innerText = `${gameState.playerTwoName} wins!!`
    message.innerText = "Press RESET to play again!"
    player1.style.visibility = "hidden";
    submit1.style.visibility = "hidden";
    player2.style.visibility = "hidden";
    submit2.style.visibility = "hidden";
    playerOneName.style.visibility = "hidden";
    playerTwoName.style.visibility = "hidden";
    }
}

const reset = (event, row, column) => {
  console.log("reset")
  message.style.visibility = "hidden";
  player1.style.visibility = "visible";
  submit1.style.visibility = "visible";
  player2.style.visibility = "visible";
  submit2.style.visibility = "visible";
  playerOneName.style.visibility = "visible";
  playerTwoName.style.visibility = "visible";
  whosTurn.style.visibility = "hidden";
  player1.innerText = "";
  player2.innerText = "";
  playerOneName.innerText = "Player One";
  playerTwoName.innerText = "Player Two";
  gameState.board.innerText = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  }




//EVENT LISTENERS AND CALLING FUNCTIONS
createGameBoard(gameState.board);
startButton.addEventListener('click', beginGame )
submit1.addEventListener('click', returnMessage);
submit2.addEventListener('click', returnMessage);
resetButton.addEventListener('click', reset)