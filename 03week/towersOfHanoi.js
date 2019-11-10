'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// array.splice(index, howmany, item1, ....., itemX)
// Create a function that moves the last element in the array to a new array
  function movePiece(startStack, endStack) {
  // Your code here
  // Use splice to take the element at the last position in the array
  // Use concat to add the element from startStack to a new Array
  // Pass the new array into endStack
  const removeStackElement = stacks[startStack].splice(-1, 1);
  const newStack = stacks[endStack].concat(removeStackElement);
  stacks[endStack] = newStack;
  
  //This was my original solution. Pop and push seem to be the most efficient solution
  //Use pop to remove the element from the array, and push to add it to the new array
  // const move = stacks[startStack].pop();
  // stacks[endStack].push(move);

}

function isLegal(startStack, endStack) {
  // Your code here
  // Create a variable to hold the length of the startStack and endStack
  const startStackLength = stacks[startStack].length;
  // const endStackLength = stacks[endStack].length;
  // create two variables to hold the last element in the array using slice. 
  const startStackLastElement = stacks[startStack].slice(-1)[0];
  const endStackLastElement = stacks[endStack].slice(-1)[0];
  // Create if/else statement that determines if a move is legal by looking at the startStack length, if 
  // startStack and endStack are the same length and if the last element in the startStack array is greater
  //than the last element in the endStack array. If any of these conditions are true return false and prevent
  //the move from happening
  if (
    startStackLength === 0 ||
    startStack === endStack ||
    startStackLastElement > endStackLastElement
  ) {
    return false;
  } else {
    return true;
  }
  // This was my first solution simply using length. I think it looks cleaner and is simpler to code
  // But i wanted to practice using slice().
  // if (
  //   startStackLength === 0 ||
  //   startStack === endStack ||
  //   stacks[startStack][startStackLength - 1] > stacks[endStack][endStackLength - 1]
  // ) { 
  //   return false;
  // } else {
  //   return true;
  // }

}
function checkForWin() {
  // Your code here
  //write a function that validates wins
  // Create variable that stores the original length of stack a and uses it to determine if either b or c 
  // reach that length. If so, return true and validate win.
  let winningStack = stacks.a.length;
  if(stacks.b.length === winningStack || stacks.c.length === winningStack) {
  return true;
  } return false;

}
// Create function that validates that you are accessing one of the stacks
function isStack(startStack, endStack) {
  const validStacks = ['a', 'b', 'c'];
  if (validStacks.includes(startStack) && validStacks.includes(endStack)){
    return true;
  }  console.log("Please choose from one of the given stacks!");
    return false;
}
//Write a function to call in all other functions and determine what happens if you meet conditions.
function towersOfHanoi(startStack, endStack) {
  // if/else statement that says if you are accessing a valid stack and the move is legal, allow the move and 
  // check if the stacks qualify for a win. Otherwise, return an error message and do nothing.
  if (isLegal(startStack, endStack) && isStack(startStack, endStack)) {
    movePiece(startStack, endStack) && checkForWin(startStack, endStack);
    if (checkForWin(startStack, endStack) === true) {
      console.log("You're a winner!")
    }
  } else {
    console.log("Illegal move! Try again!");
  }
} 


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      assert.equal(isLegal('a', 'b'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#isStack()', () => {
    it('should check that you have chosen a valid stack', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isStack('a', 'b', 'c'), true);
      assert.equal(isStack('d', 'horse'), false);
    });
  });

} else {

  getPrompt();

}
