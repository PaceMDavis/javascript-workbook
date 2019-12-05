'use strict';

const assert = require('assert');

// function forEach(arr, callback) {
//   // Your code here
// }
const arr = [1, 2, 3];
//create a function to mimic map
//arr represents array parameter
//callback represents the function being passed in
const map = (arr, callback) => {
  //mapped is an empty array, which will be our altered array for the function
  const mapped = [];
  //for loop to iterate over the array
  for (let i = 0; i< arr.length; i++) {
    //push new mapped items to mapped array using callback function
    mapped.push(callback(arr[i]))
  }
  //return new array
  return mapped;
  // Your code here
}
// callback is the argument that will be passed in as the second parameter in function
const myCallBack = (num) => num * num;
console.log(map(arr, myCallBack));


function filter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    // if(arr[i] % 2 === 0) 
    if(callback(arr[i]) === true) {
    console.log(callback(arr[i]), 'hello');
      filteredArr.push(arr[i]);
    }
  // Your code here
} return filteredArr;
 };
const myFilter = num => {
  if(num % 2 === 0) {
   return true;
  } 
} 
console.log(filter(arr, myFilter));

// describe('#filter()', () => {
//   it('should return an array of items that pass the predicate test', () => {
//     const filtered = filter([1, 2, 3], (num) => {
//       return num % 2 === 0;
//     });
//     assert.deepEqual(filtered, [2]);
//   });
// });

const foodItems = [5.50, 7.65, 8.12, 23.12]

const reduce = (arr, cb) => {
  let currentValue = 0;
  for(var i = 0; i < arr.length; i++) {
    currentValue += arr[i];
  } return currentValue;
  // Your code here
}
console.log(reduce(foodItems))

// const reducer = (a, b) => a + b;

// const myReduce = (list, initialValue, reducer) => {
//   if(list.length === 0) {
//     return initialValue;
//   } else {
//     const accumulator = list[0]
//     const rest = list.slice(1);
//     const updatedAccumulator = reducer(initialValue, accumulator)
//     return myReduce(rest, updatedAccumulator, reducer)
//   }
// }
// console.log(myReduce(foodItems, 0, reducer ))
// function some(arr, callback) {
//   // Your code here
// }

// function every(arr, callback) {
//   // Your code here
// }

if (typeof describe === 'function') {

  // describe('#forEach()', () => {
  //   it('should call the callback the array.length number of times', () => {
  //     let count = 0;
  //     forEach([1, 2, 3], () => {
  //       count++;
  //     });
  //     assert.equal(count, 3);
  //   });
  // });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#reduce()', () => {
    it('should return a total of all the numbers in an array', () => {
      const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      // const reduced = [1,2,3].reduce((accumulator,currentValue) => {
      //   return accumulator + currentValue;
      // });
      assert.deepEqual(reduced, 6);
    });
  });
  // describe('#some()', () => {
  //   let count = 0;
  //   const somed = some([1, 2, 3, 4], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return true if at least one item passes the predicate test', () => {
  //     assert.equal(somed, true);
  //   });
  //   it('should stop at the first item that passes the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  //   it('should return false if no items pass the predicate test', () => {
  //     const somed = some([1, 3, 5], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(somed, false);
  //   });
  // });

  // describe('#every()', () => {
  //   it('should return true if at all passes the predicate test', () => {
  //     const everied = every([2, 4, 6], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(everied, true);
  //   });
  //   let count = 0;
  //   const everied = every([2, 3, 4, 5], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return false if any item fails the predicate test', () => {
  //     assert.equal(everied, false);
  //   });
  //   it('should stop at the first item that fails the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  // });

} else {

  console.log('Only run the tests on this one!')

}
