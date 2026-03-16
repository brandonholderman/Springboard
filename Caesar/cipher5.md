Technical Skills Survey Project Part 2: Exercise 5 - Caesar's Party Guest List

1. guests.unshift("BRUTUS")

2. guests[0]

2. guests.push("AUGUSTUS", "LUCIA")

3. guests.indexOf("SPARTACUS")

4. -1

5. const removeIndex = guests.indexOf("CASSIUS");
    guests.splice(removeIndex, 1);

6. guests.slice(0, 3)

7. 
const honoredGuests = guests.slice(0, 1); // Extracts honored guests.
const otherGuests = guests.slice(1); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays. 