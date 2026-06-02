const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];


/*
You are an explorer in a fantasy realm filled with mythical creatures. Your task is to catalog these creatures based on sightings. 
Each creature sighting is recorded in a catalog (an array of objects), where each entry includes the creature's name, type, and the last seen location.

Tasks:

- Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
- Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
- Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".
*/

function findWater(arr, creatureType) {
	return arr.find((val) => { 
		return val.type === creatureType
	})
}

function findGriffinIndex(arr, creatureIndex) {
	return arr.findIndex((val) => {
		return val.name === creatureIndex
	})
}

function findLastSighting(arr, creature) {
	return arr.find((val) => {
		return val.lastSeen === creature
	})
}