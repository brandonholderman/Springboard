/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animals) {
	return animals.forEach(val => console.log(val))
}
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
let habitats = [...forestHabitats, ...savannahHabitats]

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
// const statusUpdate = {...rhinoStatus, population: 1000, habitat: savannahHabitats[0]}

function updateStatus(...animals) {
	return { ...animals[0], population: 1000, habitat: savannahHabitats[0] }
}

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
let geneticsUpdate = { ...lionProfile }
geneticsUpdate.genetics = "Big Lion Genes"

/*
 * Observations:
 * TODO: Explain here.
 * Modyfying the copy to include a new property and value, only update the copy and not the original, since there is not reference point. 
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
let nestedChallenge = { ...ecosystemHealth }
// nestedChallenge.carnivores = "Abundant"
nestedChallenge.foodSupply.carnivores = "Abundant"

/*
 * Observations:
 * TODO: Explain here.
 * Modifying an exisiting property will automatically update the property in the original object since they both point to the same reference. 
 */


sightings(lionProfile)
console.log(habitats)
// console.log(statusUpdate)
console.log(updateStatus(rhinoStatus))
console.log(geneticsUpdate)
console.log(lionProfile)
console.log(geneticsUpdate)
console.log(nestedChallenge)
console.log(ecosystemHealth)

