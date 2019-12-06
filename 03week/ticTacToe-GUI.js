

// document.getElementById('box0').addEventListener("click", handleClick);
// let winDiv = document.createElement('p');
let divChange = document.getElementById("winDisplay");
// let winAnnounce = document.createTextNode(playerTurn + "wins!!!")
// let previousPlayer = 

function handleClick (event) {
  // console.log(event.target)
  square = event.target;
 square.textContent = playerTurn;
 let squareCol = square.dataset.col;
 let squareRow = square.dataset.row;
  // console.log(squareCol, squareRow);
  ticTacToe(squareRow, squareCol);
  
}
// console.log(document.getElementById("box8"))
// console.log(dataset.col[0], dataset.row[0])
// checkForWin();
// function displayWinner() {
//   handleClick(checkForWin);
// //   if (checkForWin() = true) {
// //     return divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));
// //   } else {
// //     return false
// //   };
// // }
// }
const squares = document.querySelectorAll('.board-square');

squares.forEach((item) => {
  item.addEventListener("click", handleClick);
});


// const addGamePiece = function(selectedElement) {
//   //create new element
//   let newElement = document.createElement('p')
//   if (playerTurn === 'x') {
//     newElement.innerHTML = 'o'

//     playerTurn = 'o'
//   } else {
//     newElement.innerHTML = 'x'

//     playerTurn = 'x'
//   }
// }


let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//After user input, we should alternate between X and O
let playerTurn = 'X';

// function printBoard() {
//   console.log('   0  1  2');
//   console.log('0 ' + board[0].join(' | '));
//   console.log('  ---------');
//   console.log('1 ' + board[1].join(' | '));
//   console.log('  ---------');
//   console.log('2 ' + board[2].join(' | '));
// }

function horizontalWin() {
  // Your code here
  // call vertical and diagonal wins
  // return true or false
  // check rows of board for a match
  if ((board[0][0] === playerTurn) && (board[0][1] === playerTurn) && (board[0][2] === playerTurn)) {
    return true;
  } else if ((board[1][0] === playerTurn) && (board[1][1] === playerTurn) && (board[1][2] === playerTurn)) {
    return true;
  } else if ((board[2][0] === playerTurn) && (board[2][1] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  } else{
    return false;
  }};
// function horizontalWin() {
  
//   // Your code here
//   // call vertical and diagonal wins
//   // return true or false
//   // check rows of board for a match
//   if (((document.getElementById('box0')) && (document.getElementById('box1')) && (document.getElementById('box2'))) === ["X"] || ["O"]) {
//     return divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));;
//   } else if (((document.getElementById('box3')) && (document.getElementById('box4')) && (document.getElementById('box5'))) === playerTurn) {
//     return divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));;
//   } else if (((document.getElementById('box6')) && (document.getElementById('box7')) && (document.getElementById('box8'))) === playerTurn) {
//     return divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));;
//   } else{
//     return false;
//   }
// }
function verticalWin() {
  // Your code here
  // call horizontal and diagonal wins
  // return true or false
  // check columns of board for a match
  if ((board[0][0] === playerTurn) && (board[1][0] === playerTurn) && (board[2][0] === playerTurn)) {
    return true;
  } else if ((board[0][1] === playerTurn) && (board[1][1] === playerTurn) && (board[2][1] === playerTurn)) {
    return true;
  } else if ((board[0][2] === playerTurn) && (board[1][2] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  } else{
    return false;
  }};
function diagonalWin() {
  // Your code here
  // call horizontal and diagonal wins
  // check two diagonal x pattern possibilities
  if ((board[0][0] === playerTurn) && (board[1][1] === playerTurn) && (board[2][2] === playerTurn)) {
    return true;
  } else if ((board[0][2] === playerTurn) && (board[1][1] === playerTurn) && (board[2][0] === playerTurn)) {
    return true;
  } else{
    return false;
  }};
 // if (checkForWin = true) {
  //   return divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));
  // } else {
  //   return false
  // };


function checkForWin() {
  //Your code here
  
  //call diagonal, horizontal, and vertical wins
  //return true if any checks are true
  if (diagonalWin()  || verticalWin()  || horizontalWin()) {
    // gameOver(); 
    divChange.appendChild(document.createTextNode(playerTurn + " wins!!!"));
    return true
  } else {
    return false;
  }};  

//validate input
// function validate (row, column) {
//   if ( (row==0 )|| (row ==1 )||( row == 2)) {
//   if ( (column==0 )|| (column ==1 )||( column == 2)) {
//   return true
//   } else {
//   console.log("invalid move")
//   }
//   }
//   checkForWin()
//   }
//   //check empty space
//   function emptySpace(row,column) {
//   if (board[row][column] === ' ') {
//   return true
//   }
//   }

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
  checkForWin()
   // manipulate playerTurn variable and switch from X to O and O to X.
   if (playerTurn === 'X') {
     playerTurn = 'O';
   } else {
     playerTurn = 'X';
   }};


// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });

// }
