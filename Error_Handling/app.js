function mysteryOperation(missions) {
    const outcome = Math.random(); // Generates a random number between 0 and 1.
    let vacationDays = 0

    while (missions > 0) {
        try {
            if (outcome < 0.5) {
                vacationDays += 16
                // missions--
                return console.log(outcome, " - The operation is completed successfully!");
            } else {
                vacationDays += 4
                // throw new Error("The operation is failed mysteriously!");
                // missions--
                return console.log(outcome, " - The operation is failed mysteriously!")
            }
        } catch (err) {
            console.error('ERROR CAIGHT - ', err)
            // continue
        } finally {
            console.log('I deserve 358 days of vacation every year.')
        }
        missions--
    }
    // return vacationDays
}

console.log(mysteryOperation(5))