const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];


let mapExercise = users.map((val) => {
	let fullname = val.firstName + ' ' + val.lastName;
	let membershipStatus = '';

	if (val.points > 100) {
		membershipStatus = 'Premium'
	} else {
		membershipStatus = 'Standard'
	}

	return { fullname, membershipStatus }

})

console.log(mapExercise)