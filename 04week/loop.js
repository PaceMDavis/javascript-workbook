let num = 0;
let i = 0;

do {
  i = i++;
  num = num + i;
} while (i <= 1000);

console.log(num);


const janeDoe = {
  firstName: 'Jane', 
  lastName: 'Doe', 
  birthDate: 'Jan 5, 1925', 
  gender:'female',
}

for (let key in janeDoe) {
  if(key === 'birthDate') {
  let yearBirth = janeDoe.birthDate.split(' ')[2];
  let convertNumber = Number(yearBirth);
  if(convertNumber % 2 != 0) { 
    console.log(janeDoe.birthDate)
}}};

const arrayOfPersons = [
  {firstName: 'Jane', lastName: 'Doe', birthDate: 'Jan 5, 1925', gender: 'female'},
  {firstName: 'George', lastName: 'Michael', birthDate: 'February 28, 1925', gender: 'male'},
  {firstName:'Lacey', lastName: 'Peters', birthDate: 'July 24, 1975', gender: 'female'},
  {firstName: 'Steve', lastName: 'Larry', birthDate: 'September 17, 1955', gender: 'male'},
  {firstName: 'Lojack', lastName: 'Dore', birthDate: 'December 12, 1995', gender: 'male'}
];

const personMap = arrayOfPersons.map(data => `${data.firstName} ${data.lastName} was born on ${data.birthDate}, and is ${data.gender}`);
console.log(personMap);

const malesOnly = arrayOfPersons.filter(men => men.gender === "male" );
console.log(malesOnly);

const lateMillenials = arrayOfPersons.filter(function(youngins) {
  let dateBreak = youngins.birthDate.split(' ')[2];
  if(dateBreak > 1989) {
    console.log(youngins);
  }
});
