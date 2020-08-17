// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// create a function that takes in an array of objects
const nameCapital = (array) => {
  // map over the array of objects
  return array.map(value=>{
    // destructure value.name and value.occupation
    let name = value.name
    let occupation = value.occupation
    // create a temporary index of each time there's a space " "
    let tempIndex = name.indexOf(" ")
    // create a variable that replaces index 0 with the letter capitalized
    let firstName = name.replace(name.charAt(0),(name.charAt(0).toUpperCase()))
    // create a variable that replaces the index after the space " " of firstName with the letter capitalized
    let lastName = firstName.replace(name.charAt(tempIndex + 1), (name.charAt(tempIndex + 1).toUpperCase()))
    // return the whole name capitalized with the occupation using string concatenation
    return lastName + " is a " + occupation
  })
}

// console.log(nameCapital(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a function that takes in an array
const modulo3 = (array) => {
  // filter the array
  let newArr = array.filter(value =>{
    // return if the value is a number
    return typeof value === "number"
  })
  // map through the filtered array
  return newArr.map(value => {
    // return the remainder of the numbers when divided by 3
    return value % 3
  })
}

// console.log(modulo3(testingArray1));
// console.log(modulo3(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// create a function that takes in 2 arrays
const comboArr = (arr1, arr2) => {
  // create a combined array of both arrays using .concat method
  let combined = arr1.concat(arr2)
  // filter through the combined array
  return combined.filter((value, index)=>{
    // use indexOf which returns the first index at which a given element can be found in the array and filter the values that match the index. it returns the value when the index first showed up.
    return combined.indexOf(value) === index
  })
}
// console.log(comboArr(testingArray3, testingArray4));