document.getElementById('box0').addEventListener("click", test);

function test (event) {
  console.log(event)
}


const addGamePiece = function(selectedElement) {
  //create new element
  let newElement = document.createElement('p')
  if (playerTurn === 'x') {
    newElement.innerHTML = 'o'

    playerTurn = 'o'
  } else {
    newElement.innerHTML = 'x'

    playerTurn = 'x'
  }
}


let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//After user input, we should alternate between X and O
let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  // call vertical and diagonal wins
  // return true or false
  // check rows of board for a match
  if (board[0][0] && board[0][1] && board[0][2] === playerTurn) {
    return true;
  } else if (board[1][0] && board[1][1] && board[1][2] === playerTurn) {
    return true;
  } else if (board[2][0] && board[2][1] && board[2][2] === playerTurn) {
    return true;
  } else{
    return false;
  }
}

function verticalWin() {
  // Your code here
  // call horizontal and diagonal wins
  // return true or false
  // check columns of board for a match
  if (board[0][0] && board[1][0] && board[2][0] === playerTurn) {
    return true;
  } else if (board[0][1] && board[1][1] && board[2][1] === playerTurn) {
    return true;
  } else if (board[0][2] && board[1][2] && board[2][2] === playerTurn) {
    return true;
  } else{
    return false;
  }
}

function diagonalWin() {
  // Your code here
  // call horizontal and diagonal wins
  // check two diagonal x pattern possibilities
  if (board[0][0] && board[1][1] && board[2][2] === playerTurn) {
    return true;
  } else if (board[0][2] && board[1][1] && board[2][0] === playerTurn) {
    return true;
  } else{
    return false;
  }
}

function checkForWin() {
  // Your code here
  // call diagonal, horizontal, and vertical wins
  // return true if any checks are true
  if ((diagonalWin = true) || (verticalWin = true) || (horizontalWin = true)) {
    // gameOver();
    return true;
    

  } else {
    return false;
  }
}
// function gameOver() {
//   let clearBoard = board
//   if (checkForWin() = true) {
//   return clearBoard = "" ;
//   }
// }
function ticTacToe(row, column) {
  // Your code here
  // manipulate board array (place X or 0) based on user input (row,column)
  let selectedRow = board[row];
  selectedRow[column] = playerTurn;

   // manipulate playerTurn variable and switch from X to O and O to X.
   if (playerTurn === 'X') {
     playerTurn = 'O';
   } else {
     playerTurn = 'X';
   }
  //  checkForWin(); 
}


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}
