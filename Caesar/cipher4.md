Technical Skills Survey Project Part 2: Exercise 4 - The Secret Emblem of Caesar's Invitation

1. 
let locationClue = ''

if (emblemClue1 === 'Eagle'){
    locationClue = 'Forum'
} else if (emblemClue1 === 'Lion') {
    locationClue = 'Colosseum'
} else {
    locationClue = 'Villa'
}


2. 
if (emblemClue2  === 'Laurel' && locationClue ===  'Forum') {
    locationCLue = 'of Augustus'
} else if (emblemClue2 === 'Grapes' || emblemClue2 === 'Villa') {
    locationClue = 'of Pompey'
}


3. 
switch (emblemClue3) {
    case 7: 
        locationClue += 'North'
        break;
    case 3:
        locationClue += 'South'
        break;
    case 9:
        locationClue += 'East'
        break;
    case 4:
        lcoationClue += 'West'
        break;
}   


4. Triple equals checks for an exact match of value and type, while double equals can loosely equal such as 14 and '14'.