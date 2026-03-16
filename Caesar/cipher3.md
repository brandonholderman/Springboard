Technical Skills Survey Project Part 2: Exercise 3 - Creating a Secret Shift Value for Caesar

1. let randomNum = Math.random()

2. let shiftRange = 33 - 3 + 1

3. The 1 is added so the range includes the number it begins counting from.

4. let shiftRange = randomNum * shiftRange

5. because multiplying the random number by the specified range will return a random number within that specified range. 

6. let wholeNumber = Math.floor(shiftRange)

7. Math.floor returns a whole number instead of a decimal. 

8. let cipherShift = wholeNumber + 3

9. Adding 3 ensures our range begins counting at 3 instead of 0. 