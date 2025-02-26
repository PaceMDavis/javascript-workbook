'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
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



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
