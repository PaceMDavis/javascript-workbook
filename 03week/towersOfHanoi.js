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

function movePiece(startStack, endStack) {
  // Your code here
  const move = stacks[startStack].pop();
  stacks[endStack].push(move);

}

function isLegal(startStack, endStack) {
  // Your code here
const startStackLength = stacks[startStack].length;
const endStackLength = stacks[endStack].length;

if (
  startStackLength === 0 ||
  startStack === endStack ||
  stacks[startStack][startStackLength - 1] > stacks[endStack][endStackLength - 1]
) { 
  return false;
} else {
  return true;
}

//   let stackReadA = stacks.a.slice(-1)[0];
//   let stackReadB = stacks.b.slice(-1)[0];
//   let stackReadC = stacks.c.slice(-1)[0];
//   if (stackReadA || stackReadB || stackReadC < endStack){
//     movePiece()
//   } else {
//     console.log("Invalid move! Try again!");
//   }

//   console.log(stacked);
// }
}
function checkForWin() {
  // Your code here
  let winningStack = stacks.a.length;
  if(stacks.b.length === winningStack || stacks.c.length === winningStack) {
  return true;
  } return false;

}
function isStack(startStack, endStack) {
  const validStacks = ['a', 'b', 'c'];
  if (validStacks.includes(startStack) && validStacks.includes(endStack)){
    return true;
  }  
    return false;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //create nested for loops to loop over stack array and return values
  // let startStack = stacks

  if (isLegal(startStack, endStack) && isStack(startStack, endStack)) {
    movePiece(startStack, endStack) && checkForWin(startStack, endStack);
  } else {
    console.log("Illegal move! Try again!");
  }
} 
  // let stackCheck = stacks.length;
  // for (let i = 0; i < stackCheck; i++) {
  //   let halfWay = stacks[i].length;
  // for (let j = 0; j<halfWay; j++){
  //   console.log(stacks[i][j])
  // }
  // }



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

} else {

  getPrompt();

}
