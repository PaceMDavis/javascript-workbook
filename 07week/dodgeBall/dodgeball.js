//This is the array of potential players for dodgeball we will call
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
assignPlayer(player) {
  player.push(this)
  this.player = player
}
}
console.log(Player)
// set up a class for blueTeammate that players can be added to
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
  let index = arrOfPeople.findIndex(people => {
    return people.id === id
  })
  let player = new Player(arrOfPeople[index], true, true, true, true, 4)
  listOfPlayers.push(player)
  arrOfPeople.splice(index, 1)
  displayPlayer()
  listPeopleChoices();
  console.log(`li ${id} was clicked!`)
}
const displayPlayer= () => {
  const dodgePlayers = document.getElementById('players')
  dodgePlayers.innerHTML=''
  listOfPlayers.map(person => {
    console.log('MAP', person)
    playerMove = document.getElementById(`${person.person.id}`)
    const li = document.createElement("li")
    const redButton = document.createElement("button")
    const blueButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    blueButton.innerHTML = "Blue Team"
    redButton.addEventListener('click', function() {redTeamAssign(person.person.id)})
    blueButton.addEventListener('click', function() {blueTeamAssign(person.person.id)})
    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(`${person.person.name} - ${person.person.skillSet}`))
    dodgePlayers.append(li)
  })
}
const displayRed = () => {
  const redPlayers = document.getElementById('red')
  redPlayers.innerHTML=''
  redTeam.map(person => {
    // playerMove = document.getElementById(`${id}`)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${person.person.name} - ${person.person.skillSet}`))
    redPlayers.append(li)
  })
}
const redTeamAssign = (id) => {
  const redPlayers = document.getElementById('red')
  let index =listOfPlayers.findIndex(person => {
    return person.id= id
  })
  let player = new RedTeammate(listOfPlayers[index], true, true, true, true, 4)
  redTeam.push(player.person)
  listOfPlayers.splice(index,1)
  displayRed()
  displayPlayer()
  console.log(redTeam)
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
  let player = new BlueTeammate(listOfPlayers[index], true, true, true, true, 4)
  blueTeam.push(player.person)
  listOfPlayers.splice(index,1)
  displayBlue()
  displayPlayer()
  console.log(blueTeam)
}