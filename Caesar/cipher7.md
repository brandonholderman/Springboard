Technical Skills Survey Project Part 2: Exercise 7 - Meeting Again with Caesar's Best Friend

const friend = "BRUTUS"
const shiftValue = 3;
let alphabet = 'abcdefghijklmnopqrstuvwxyz'

1. let alphabet = 'abcdefghijklmnopqrstuvwxyz'

2. 
function cipher() {
    let encrypted = ''
    for(let i of friend){
        let currLetter = i
        let currIndex = alphabet.indexOf(currLetter.toLowerCase())
        let encryptShift = currIndex += shiftValue
        encrypted += alphabet[encryptShift].toUpperCase()
    }
}

3. Using a loop provides the ability to create a reusable function that will apply the same encryption logic to any word you try to use. 

4. Using % allows the encryption to wrap around to the beginning of the alphabet when letters reach the end 