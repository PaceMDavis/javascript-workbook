1. Get the current startStack and endStack values (either through user input or test) inside towersofHanoi function
  -pass to isLegal()
  -pass to movePiece()

2. Check to make sure a piece is allowed to move (isLegal function)
  -Use the startStack and endStack values to determine if it would be a legal move
    -startStack and endStack should be different letters
    -Access the numbers inside the arrays that correspond to the startStack and endStack values ('a', 'b', or 'c'), these are the keys of the stacks object.
    -a bigger number cannot move into an array with a smaller number(a larger block cannot be placed on a smaller one) 
      -Any number can be placed onto an empty stack (array inside the stacks object)
  -return error message(string) telling the user if their input is invalid (should be 'a', 'b', or 'c')
  - Nice to have: further input validation like making sure the startStack/endStack values are 1 character long

3. Move a piece from one stack to another (movePiece function)
  - Update the stacks object inside of the movePiece function using startStack and endStack values
  - Take the value from the end of the startStack and add it to the end of the endStack array.
  - Maybe using .pop .shift, etc

4. Check to see if stack 1 or stack 2 have the pyramid (win) checkForWin function
  - When all the blocks are stacked into column 1 or 2 return true, otherwise false
  - Nice to have: console log a winning message
