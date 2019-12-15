//This is the array of potential players for dodgeball we will call
// require('jsdom-global')()
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//Set up empty arrays for listOfPlayers, blueTeam, and redTeam
const listOfPlayers = []
const blueTeam = []
const redTeam = []

//Set up a class for player that includes canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, and will need to extend when added to a team
class Player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.person = person;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    }
// assignPlayer(player) {
//   player.push(this)
//   this.player = player
// }
}
// console.log(Player)
// set up a class for blueTeammate that players can be added to
//Hardcode this.color and this.mascot as they are set for each team color
class BlueTeammate extends Player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = "Blue";
    this.mascot = "Bluejay";
  }
}
//set up a class for redTeammate that players can be added to
class RedTeammate extends Player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = "Red";
    this.mascot = "Cardinal";
  }
}
// This function populates the first list of people when clicked
const listPeopleChoices = () => {
  //This grabs the ul people
  const listElement = document.getElementById('people')
  listElement.innerHTML =''
  //This function maps over the array of people with person as its parameter
  arrOfPeople.map(person => {
    //This creates a new list element
    const li = document.createElement("li")
    //This creates a new button
    const button = document.createElement("button")
    //The test of the new button is Make Player
    button.innerHTML = "Make Player"
    //This adds an event listener to the button and that is click, so when 
    //The button is clicked it will call the makePlayer function
    button.addEventListener('click', function() {makePlayer(person.id)} )
    //The new li that has been created is appended with the new button
    li.appendChild(button)
    //It is then appended with the players name and skillset
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    //The li is appended to the UL with the ID people from above
    listElement.append(li)
    // listOfPlayers.push(person)
    
  }); console.log(listOfPlayers)
}


const makePlayer = (id) => {
  const dodgePlayers = document.getElementById('players')
  //Find index of the player you want to make
  let index = arrOfPeople.findIndex(people => {
    return people.id === id
  })
  //Set up a new Player class. Pass in the arrOfPeople[index] as person, and set other values to true and years of experience
  let player = new Player(arrOfPeople[index], true, true, true, true, 4)
  //When clicked, the selected player with class is pushed to the listOfPlayers array
  listOfPlayers.push(player)
  //They are removed from the arrOfPeople at the same time
  arrOfPeople.splice(index, 1)
  //displayPlayer and listPeopleChoices are called to update their lists
  displayPlayer()
  listPeopleChoices();
  // console.log(`li ${id} was clicked!`)
}
const displayPlayer= () => {
  //'players' is accessed and given a variable
  const dodgePlayers = document.getElementById('players')
  //That variable is passed to set the innerHTML to nothing after the first time it is called, otherwise it would populate over and over again
  dodgePlayers.innerHTML=''
  //The map function is used to map over the listOfPlayers array
  listOfPlayers.map(person => {
    // console.log('MAP', person)
    //The variable person is used, so we have to grab their id by person.person, since they have a person key in the object
    playerMove = document.getElementById(`${person.person.id}`)
    //a Li is created
    const li = document.createElement("li")
    //The button to assign them to the red team is created
    const redButton = document.createElement("button")
    //The button to assign them to the blue team is created
    const blueButton = document.createElement("button")
    //HTML is set for both buttons
    redButton.innerHTML = "Red Team"
    blueButton.innerHTML = "Blue Team"
    //Event listeners that listen for a click are also added and reference the functions below
    redButton.addEventListener('click', function() {redTeamAssign(person.person.id)})
    blueButton.addEventListener('click', function() {blueTeamAssign(person.person.id)})
    //Both buttons and the players info are appended to the li
    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(`${person.person.name} - ${person.person.skillSet}`))
    dodgePlayers.append(li)
  })
}
//Wrote two separate functions here, one for assigning them to a team and another for displaying them in the GUI
const displayRed = () => {
  //Grab the element
  const redPlayers = document.getElementById('red')
  //Set the redplayer html to nothing, so it doesn't print multiple times
  redPlayers.innerHTML=''
  // map over the redTeam array
  redTeam.map(person => {
    //Create new LI
    const li = document.createElement("li")
    //Put info in the read team UL
    li.appendChild(document.createTextNode(`${person.person.name} - ${person.person.skillSet}`))
    redPlayers.append(li)
  })
}
const redTeamAssign = (id) => {
  //Grab the same element as above
  const redPlayers = document.getElementById('red')
  //Use findIndex to grab the index of the player selected
  let index =listOfPlayers.findIndex(person => {
    return person.id= id
  })
  //Extend the player to become a redTeammate
  let player = new RedTeammate(listOfPlayers[index].person, true, true, true, true, 4)
  //Push them to the redTeam array
  redTeam.push(player)
  //Splice them off the listOfPlayers array
  listOfPlayers.splice(index,1)
  //Call displayRed and displayPlayer to update those lists accordingly
  displayRed()
  displayPlayer()
  // console.log(redTeam)
}
const displayBlue = () => {
  const bluePlayers = document.getElementById('blue')
  bluePlayers.innerHTML=''
  blueTeam.map(person => {
    console.log(person, "I'm here")
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${person.person.name} - ${person.person.skillSet}`))
    bluePlayers.append(li)
  })  
}
// const displayBlue
const blueTeamAssign = (id) => {
  const bluePlayers = document.getElementById('blue')
  let index =listOfPlayers.findIndex(person => {
    return person.id= id
  })
  let player = new BlueTeammate(listOfPlayers[index].person, true, true, true, true, 4)
  blueTeam.push(player)
  listOfPlayers.splice(index,1)
  displayBlue()
  displayPlayer()
  console.log(blueTeam, "hello there")
}

//Three tests
//Check to make sure listOfPlayers array has been populated with seven players
//When player is added to blue or red team, verify that the length of the array has increased
//Check to make sure mascot equals something on addition to a team
const assert = require('assert');
//tests
if(typeof describe === 'function') {
  describe('arrOfPeople', function(){
    it('Test that the original length of arrOfPeople is 6', function(){
      assert.equal(arrOfPeople.length, 7);
    });
  });

  describe('PlayerClass', function(){
    it('should have the constructors person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience', function(){
      let paul = new Player('Paul', true, true, true, true, 4);
      assert.equal(paul.canThrowBall, true);
      assert.equal(paul.canDodgeBall, true);
      assert.equal(paul.hasPaid, true);
      assert.equal(paul.yearsExperience, 4);
    });
  });

  describe('blueTeamMate', function() {
    it('should extend the constructors mascot and color to playerClass', function(){
      let bluePaul = new BlueTeammate('Paul', true, true, true, true, 4);
      assert.equal(bluePaul.mascot, 'Bluejay');
      assert.equal(bluePaul.color, 'Blue');
    })
  })
}

// if (typeof describe === 'function'){
//   describe('CrewMember', function(){
//     it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
//       var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//       assert.equal(crewMember1.name, 'Rick Martinez');
//       assert.equal(crewMember1.job, 'pilot');
//       assert.equal(crewMember1.specialSkill, 'chemistry');
//       assert.equal(crewMember1.ship, null);
//     });

//     it('can enter a ship', function(){
//       let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
//       let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//       crewMember1.enterShip(mav);
//       assert.equal(crewMember1.ship, mav);
//       assert.equal(mav.crew.length, 1);
//       assert.equal(mav.crew[0], crewMember1);
//     });
//   });

//   describe('Ship', function(){
//     it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
//       let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
//       assert.equal(mav.name, 'Mars Ascent Vehicle');
//       assert.equal(mav.type, 'MAV');
//       assert.equal(mav.ability, 'Ascend into low orbit');
//       assert.equal(mav.crew.length, 0);
//     });

//     it('can return a mission statement correctly', function(){
//       let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
//       let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//       let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
//       let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
//       assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
//       assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

//       crewMember1.enterShip(mav);
//       assert.equal(mav.missionStatement(), "Ascend into low orbit");

//       crewMember2.enterShip(hermes);
//       assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
//     });
//   });
// }
