Technical Skills Survey Project Part 2: Exercise 8 - Caesar's Cipher Reloaded

const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz"; 


1. 
function encryptLetter (letter, shift) {
    let encrypted = ''
    let currIndex = alphabet.indexOf(letter.toLowerCase())
    let encryptShift = (currIndex += shift) % alphabet.length
    return encrypted += alphabet[encryptShift].toUpperCase()
}

2. 
function encryptLetter (word, shift) {
    let encrypted = ''
    for(let i of word){
        let currIndex = alphabet.indexOf(i.toLowerCase())
        let encryptShift = (currIndex += shift) % alphabet.length
        encrypted += alphabet[encryptShift].toUpperCase()
    }
    return encrypted
}

3. 
function decryptLetter (encryptedWord, shift) {
    let decrypted = ''
    for(let i of encryptedWord) {
        let currIndex = alphabet.indexOf(i.toLowerCase())
        let encryptShift = (currIndex -= shift) % alphabet.length
        decrypted += alphabet[encryptShift].toUpperCase()
    }
    return decrypted
}

4. Yes, as long as the same shift value is passed in with each function.
