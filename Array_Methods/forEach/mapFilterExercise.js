/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map((val) => {
        return val * 2
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3])  // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
function valTimesIndex(arr) {
    return arr.map((val, index) => {
        return val * index
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// function extractKey(arr, inputKey){
//     let objMap = arr.map((obj) => {
//         return Object.entries(obj).map(([key, value]) => {
//             if(inputKey === key) {
//                 return value
//             }
//         })
//     })
//     return objMap
// }

function extractKey(arr, key){
    return arr.map((val) => {
        return val[key]
    })
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/
let data = [
    { first: 'Elie', last: "Schoppik" }, 
    { first: 'Tim', last: "Garcia", isCatOwner: true }, 
    { first: 'Matt', last: "Lane" }, 
    { first: 'Colt', last: "Steele", isCatOwner: true }
]


function filterByValue(arr, key) {
    return arr.filter((val) => key in val).map((val) => {
        return val
    })
}

// console.log(filterByValue(data, 'isCatOwner'))