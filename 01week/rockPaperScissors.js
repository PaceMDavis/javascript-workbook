'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// function rockPaperScissors(hand1, hand2) {

//   // Write code here

// }


//Create a function that has an if/elseif/else
//to determine who wins 


const rockPaperScissors = (hand1, hand2) => {

//Use toLowerCase and trim to go through any string entries and make them readable
hand1 = hand1.toLowerCase().trim();
hand2 = hand2.toLowerCase().trim();  

//First if statement takes care of all tie cases
//which reduces number of else if statments
if (hand1 === hand2)
return("It's a tie!");
//make an else if statement for remaining moves minus 1
else if (hand1 === "rock" && hand2 === "scissors")
return("Hand one wins!");
else if (hand1 === "rock" && hand2 === "paper")
return("Hand two wins!");
else if (hand1 === "paper" && hand2 === "scissors")
return("Hand two wins!");
else if (hand1 === "paper" && hand2 === "rock")
return("Hand one wins!");
else if (hand1 === "scissors" && hand2 === "rock")
return("Hand two wins!");
//the else statement doesn't need the last move 
//declared since its the only one left
else return("Hand one wins!");
}


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}


