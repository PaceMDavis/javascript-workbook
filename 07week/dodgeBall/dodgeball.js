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
class player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    }
}

// set up a class for blueTeammate that players can be added to
class blueTeammate extends player {
  constructor(color, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = color;
    this.mascot = mascot;
  }
}
//set up a class for redTeammate that players can be added to
class redTeammate extends player {
  constructor(color, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = color;
    this.mascot = mascot;
  }
}
// This function populates the first list of people when clicked
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    listOfPlayers.push(person)
  }); console.log(listOfPlayers)
}


const makePlayer = (id) => {
  const dodgePlayers = document.getElementById('players')
  arrOfPeople.map(person => {
    playerMove = document.getElementById(`${id}`)
    const li = document.createElement("li")
    const redButton = document.createElement("button")
    const blueButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    blueButton.innerHTML = "Blue Team"
    redButton.addEventListener('click', function() {redTeamAssign(person.id)})
    blueButton.addEventListener('click', function() {blueTeamAssign(person.id)})
    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(`${person.name} - ${person.skillSet}`))
    dodgePlayers.append(li)
  })
  console.log(`li ${id} was clicked!`)
}

const redTeamAssign = (id) => {
  console.log(`li ${id} was clicked red`)
}

const blueTeamAssign = (id) => {
  console.log(`li ${id} was clicked blue`)
}