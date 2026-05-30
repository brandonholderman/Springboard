/*
As a detective 🕵️ at Shadow Sleuths 🥷, you will attend mysterious operations using the `mysteryOperation` function. 
If the operation is successful 🍻, it prints to the console; if it fails 🦹, it throws an error!

The bureau gives you 13 days of vacation if an operation is successful, if not only 1 for your motivation. In both situations, they also give you 3 days for your attendance. 
This year, you will attend 20 missions. Code this logic using `try`/`catch`/`finally`, and print how many days of vacation you deserve!

Hint: Remember, `try` runs until there is an error, `catch` runs when there is an error, and `finally` runs always after both `try` and `catch` finished.
*/


function mysteryOperation(missions) {
	let vacationDays = 0
	
	while (missions > 0) {
		const outcome = Math.random(); // Generates a random number between 0 and 1.
		try {
			if (outcome < 0.5) {
				vacationDays += 16
				console.log(outcome, " - The operation is completed successfully!");
			} else {
				vacationDays += 4
				throw new Error("The operation is failed mysteriously!");
				// console.log(outcome, " - The operation is failed mysteriously!")
			}
		} catch(err) {
			console.error(outcome, err)
		} finally {
			console.log('I deserve 358 days of vacation every year.')
		}
		missions--
	}
	return vacationDays
}

console.log(mysteryOperation(20))