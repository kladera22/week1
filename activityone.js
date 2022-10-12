//! Problem #1: What should the following evaluations return? 
// 2 == '2'          ---> true
// 'he' == 'she'     ---> false
// 2 === 2           ---> true
// 'true' == true    ---> false
// true === true     ---> true
//'true' != true     ---> true
// 'true' !== true   ---> flase

//! Problem #2: What are the three different ways you can declare a variable? And what is the differences between them?
// var   ---> globaly scoped and can be re-assigned
// let   ---> block scoped and can be re-assigned
// const ---> block scoped and can NOT be re-assigned

//! Problem #3: Write a simple function for each type of these functions: 
//?First-Class Function
// const firstClass = () => {
//     console.log('goldfish')
// }

//? Higher-Order Function
// const higherOrder = (fisrtClass) => {
//     firstClass()
// }

//? Callback Function
// const callBack = (fisrtClass) => {
//     firstClass() // <--- call back function
// }

//  firstClass ()

//! Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below? 
// const a = 'hi';
// console.log(c);               //? ---> undefined
// const someFunction = (arg) => {
//  const b = 'bye';
//  if (arg) {
//  const c = 'see ya!';
//  console.log(a);              //? ---> hi
//  console.log(b);              //? ---> bye
//  }
// }

// someFunction(true);

//! Problem #5: Given the following data structure, write a for loop using: 
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const someArray2 = [];

// //? for statement
// for (let i = 0; i < someArray.length; i++) {
//     someArray2.push(someArray[i]);
// }
// console.log(someArray2)

//? for...of
// for (let someArray2 of someArray) {
//     console.log(someArray2)
// }
// console.log(someArray2)

//! Problem #6: Given the following data structure:
// const someArray = [1, 2, 3, 4, 5]
// const someArray2 = [6, 7, 8, 9, 10]

//? - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(someArray.concat(someArray2))

//? - Use the length property to return the length of the array
// console.log(someArray.length)

//? - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
//console.log(someArray.filter(num => num !== 3)); 

//? - Use the find() method to find and return the value of 5.
// console.log(someArray.find(num => num === 5))

//? - Use the slice() method to return back this array: [3, 4]
// console.log(someArray.slice(2, 4))

//? - Use the splice() method to return back this array: [1, 2, 5]
// someArray.splice(2,2)
// console.log(someArray)

//? - Use the includes() method to return back TRUE when I pass in “4” into the includes method. 
// console.log(someArray.includes(4))

//? - Use the indexOf() method to return back the index of the element “2”
// console.log(someArray.indexOf(2))

//? - Use the isArray() method to return back TRUE when I pass in the array
// console.log(Array.isArray(someArray))

//? - Use the join() method to return back: “1, 2, 3, 4, 5”
// console.log(someArray.join(' '))

//? - Use the map() method to return back a new array: [2, 4, 6, 8, 10]
// console.log(someArray.map(num => {return num * 2}))

//? - Use the pop() method to return back a new array: [1, 2, 3, 4]
// someArray.pop()
// console.log(someArray)

//? - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
// someArray.push(6)
// console.log(someArray)

//? - Use the shift() method to return back a new array: [2, 3, 4, 5]
// someArray.shift()
// console.log(someArray)

//? - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
// someArray.unshift(0)
// console.log(someArray)

//? - Sort this array to return [9, 1, 3, 5] using the sort() method
// array = [9, 1, 3, 5]
// console.log(array.sort())

//? - Use the reduce() method to return back the sum of all numbers in the array
// console.log(someArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0))

//! Problem #7: Given the following data structure:
// const someObject = {
//     color: 'black'
//    }

//? - Use the assign() method to add a new key value pair of: name: ‘john doe’
// Object.assign(someObject, {name: 'john doe'})
// console.log(someObject)


//? - Use the dot notation to add a new key value pair of: age: 22
// someObject.age = 22
// console.log(someObject)

//? - Use the bracket notation to add a new key value pair of: address: ‘123 test address’
// someObject['address'] = '123 test address'
// console.log(someObject)

//? - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
// console.log(Object.keys(someObject))

//? - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”]
// console.log(Object.values(someObject))

//? - Use the for…in loop against this object to console.log each of the keys values. Your terminal should return: 
// for (const key in someObject) {
//     console.log(someObject[key])
// }

//! Problem #8: Given the following data structure: 
// const numbers = [
//     {
//     num: 1
//     },
//     {
//     num: 2
//     },
//     {
//     num: 3
//     }
// ]

//? - Use either the for statement or for…of loop to console.log each of the keys. Values. Your terminal should return
// for (const obj of numbers) {
//     console.log(obj['num'])
// }

//!   Problem #9: Create a new Set() object
// const collection = new Set ([])

//?   - Add a new value of: ‘john doe’
// collection.add('john doe')

//?   - Check if the value of ‘john doe’ exists
// console.log(collection.has('john doe'))

//?   - Remove the value of ‘john doe’
// collection.delete('john doe')
// console.log(collection)

//! Problem #10: Create a new Map() object
// const collection = new Map()

//? - Add a new key-value pair of: name: ‘john doe’
// collection.set('name','john doe')
// console.log(collection)

//? - Check if the value ‘john doe’ exists
// console.log([...collection.values()].includes('john doe'))

//? - Remove the key-value pair of ‘john doe’
// collection.delete('name', 'john doe')
// console.log(collection)

//! Problem #11: Explain what asynchronous programming means in 3 sentences. 
// The use of numerous processes at once is possible with asynchronous programming. 
// When a process is waiting for an operation to be complete, 
// a process would call another process when the result is ready. We call this procedure a callback.

//! Problem #12: Explain what call back hell is. 
// Every callback accepts an argument that was received from the callbacks before it.  
// The code structure resembles a pyramid, making it challenging to comprehend and maintain. 
// All other functions are affected if there is a bug in one function.

//! Problem #13: Explain what is a promise and describe the possible states of promises. 
// The Promise object represents the eventual completion of an asynchronous operation. 
// The challenging aspect of promises is realizing that the final value might not be immediately available. \
// Instead, one of three states can apply to the promise:
//  - Pending: initial state, neither fulfilled nor rejected.
//  - Fulfilled: meaning that the operation was completed successfully.
//  - Rejected: meaning that the operation failed.

//! Problem #14: What is async/await?
//? async
// The word “async” before a function means always returns a promise. 
// Async ensures that the function returns a promise, and wraps non-promises in it.

//? await
// A await makes JavaScript wait until that promise settles and returns its result. 
// The function's execution is put on hold until the promise is resolved, and it is then resumed with the promise result.