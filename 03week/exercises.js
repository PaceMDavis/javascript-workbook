let cars = ["Ford", "Chevrolet", "Buick", "GMC"]
console.log(cars.length);

let moreCars = ["Toyota", "Fiat", "Jaguar", "Honda"]

let totalCars = cars.concat(moreCars);

console.log(moreCars.indexOf("Honda"));
console.log(cars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();

let newTotalCars = stringOfCars.split(" ");

console.log(newTotalCars);

carsInReverse = totalCars.reverse();

// console.log(carsInReverse.sort());

console.log(carsInReverse);
let removedCars = carsInReverse.slice(0,1) &&carsInReverse.slice(7);

console.log(removedCars);

carsInReverse.splice(1,2,"Honda", "Ford")

console.log(carsInReverse)

carsInReverse.push("Jaguar", "Fiat");
console.log(carsInReverse);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

carsInReverse.unshift("Ferrari");

let numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach(function(item) {
  numbers = item + 2;
  // for(i = 0; i<numbers.length; i++)
  
  console.log(numbers);

})
