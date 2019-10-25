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

// //declare two variables that allow a player to choose
// //rock paper or scissors
// let hand1 = "";
// let hand2 = "";

//Create a function that has an if/elseif/else
//to determine who wins 


const rockPaperScissors = (hand1, hand2) => {
  const strToLower = (hand1) => {
    return String(hand1).toLowerCase();
  }
  const str2ToLower = (hand2) => {
    return String(hand2).toLowerCase();
  }
  

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
// declared since its the only one left
else return("Hand one wins!");


}


  // const convertCharacters = (string, hand1, hand2) => {
  //   int ln = hand1.length();
    
  //   for (int=0; i<ln; i++)
  //   {
  //     if(str[i]>='A' && str[i]<='Z')
  //     str[i] = str[i] - 32;
  //   }
  //   int ls = hand2.length();
  //   for (int=0; x<ls; i++)
  //   {
  //     if(str[i]>='A' && str[i]<='Z')
  //     str[i] = str[i] - 32;
  //   }
  // }
// const convertCharacters = (hand1, hand2) => {
//   return hand1.toLowerCase();
//   return hand2.toLowerCase();
// }
// return(rockPaperScissors("paper", "scissors"));

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


