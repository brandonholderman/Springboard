/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
// let participant = {
//     name: 'Fred',
//     age: 69,
//     studyField: 'Parking',
// }

let name = 'Fred'
let age = 69
let studyField = 'Parking'

let participant = {
    name,
    age,
    studyField,
}

// function createParticipant(obj, name, age, studyField) {
//     return {
//         name: obj.name,
//         age: obj.age,
//         studyField: obj.studyField,
//     }
// }

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
let displayParticipants = {
    ...participant, 
    displayInfo() {
        return `${this.name}, ${this.age}, ${this.studyField}`
}}


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
let displayParticipantsArrow = {
    ...participant,
    displayInfo: () => {
        return `${this.name}, ${this.age}, ${this.studyField}`
    }
}

/*
 * Observations:
 * TODO: Explain here.
 * When attempting to use an arrow function it returns undefined for all values, because arrow functions do not have access to "this" and therefore no value to reference.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
// function updateParticipantInfo(name, value, obj) {
//     return obj = new Object({[name]: value})      
// }

function updateParticipantInfo(name, value, obj) {
    return {...obj, [name]: value} 
}


console.log(participant)
console.log(displayParticipants.displayInfo())
console.log(displayParticipantsArrow.displayInfo())
console.log(updateParticipantInfo('salary', 200, participant))
console.log(participant)


// console.log(createParticipant(participant))
// participant('alex', 30, 'science')
// console.log(participant('alex', 30, 'science'))


