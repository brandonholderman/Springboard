/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let result = []
    arr.forEach(element => {
        result.push(element * 2)
    });
    return result
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let result = []
    arr.forEach(element => {
        if (element % 2 === 0) {
            result.push(element)
        } else {
            console.log(element, ' is not an even number.')
        }
    });
    return result
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let result = []
    arr.forEach(element => {
        result.push(element.at(0) + element.at(-1))
    });
    return result
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let result = []
    arr.forEach(element => {
        result.push({ ...element, [key]: value } )
    });
    return result
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
    vowelCount('i am awesome and so are you')
*/
function vowelCount(str){
    let result = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    }
    let vowels = 'aeiou'
    let inputString = str.toLowerCase()

    inputString.split('').forEach(element => {
        // console.log(vowels.indexOf(element))
        if (vowels.indexOf(element) !== -1) {
            result[element]++
        } 
    })
    return result
}
