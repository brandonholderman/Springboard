const alphabet = "abcdefghijklmnopqrstuvwxyz";



function encrypt(message, shiftValue) { // Encryption function that takes in a message and a shift value as input and returns an encrypted message. 

    shiftValue = ((shiftValue % 26) + 26) % 26; // Normalizes the shift value to stay within the range of the alphabet.
    let encryptedMessage = '' // Initializes an empty string to build the encrypted message.
    let iteration = 0 // Initializes a counter to keep track of the number of characters processed, which is used to determine when to insert a random character.

    for (let i of message) { // Iterates through each character in the input message.
        let currIndex = alphabet.indexOf(i.toLowerCase()) // Finds the index of the current character in the alphabet and makes it lowercase.
        if (iteration === 2 && currIndex !== -1) { // Every third character (when iteration equals 2) that is a letter (currIndex !== -1) will trigger the insertion of a random character from the alphabet.
            encryptedMessage += alphabet[Math.floor(Math.random() * alphabet.length)] // Appends a random character from the alphabet to the encrypted message.
            iteration = 0 // Resets the iteration counter after inserting a random character.
        }

        if (currIndex === -1) { // If the current character is not found in the alphabet (e.g., spaces, punctuation), it is added to the encrypted message without modification.
            encryptedMessage += i // Appends the non-alphabet character to the encrypted message.
            iteration++ // Increments the iteration counter for non-alphabet characters.
        } else {
            let encryptShift = (currIndex += shiftValue) % alphabet.length // Calculates the new index for the current character by adding the shift value and using modulo to wrap around the alphabet if necessary.
            encryptedMessage += alphabet[encryptShift] // Appends the encrypted character (the character at the new index) to the encrypted message.
            iteration++ // Increments the iteration counter for alphabet characters.
        }
    }

    return encryptedMessage; // Returns the final encrypted message after processing all characters.
}




function decrypt(encryptedMessage, shiftValue) { // The decryption function takes an encrypted message and a shift value as input and returns the decrypted message.

    shiftValue = ((shiftValue % 26) + 26) % 26 // Normalizes the shift value to stay within the range of the alphabet.
    let decryptedMessage = '' // Initializes an empty string to build the decrypted message.
    let iteration = 0 // Initializes a counter to keep track of the number of characters processed, which is used to determine when to skip a random character.

    for (let i of encryptedMessage) { // Iterates through each character in the encrypted message.
        let currIndex = alphabet.indexOf(i.toLowerCase()) // Finds the index of the current character in the alphabet and makes it lowercase.
        if (iteration === 2 && currIndex !== -1) { // Every third character (when iteration equals 2) that is a letter (currIndex !== -1) will trigger the skipping of the random character that was inserted during encryption.
            iteration = 0 // Resets the iteration counter after skipping a random character.
            continue // Skips the current character and moves to the next iteration of the loop.
        }

        if (currIndex === -1) { // If the current character is not found in the alphabet (e.g., spaces, punctuation), it is added to the decrypted message without modification.
            decryptedMessage += i // Appends the non-alphabet character to the decrypted message.
            iteration++ // Increments the iteration counter for non-alphabet characters.
        } else {
            let decryptShift = ((currIndex - shiftValue) % alphabet.length + alphabet.length) % alphabet.length // Calculates the new index for the current character by subtracting the shift value and using modulo to wrap around the alphabet if necessary. The additional addition of alphabet.length ensures that the result is positive.
            // ^^ The above forumla was sourced from pythontutor.com
            decryptedMessage += alphabet[decryptShift] // Appends the decrypted character (the character at the new index) to the decrypted message.
            iteration++ // Increments the iteration counter for alphabet characters.
        }
    }

    return decryptedMessage; // Returns the final decrypted message after processing all characters.
}



let message = 'Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu \'uQkuhuubyukiu\' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!'

let questComplete = 'seek the midnight shadow of romulus and remus. there, whisper the word \'aurelius\' to the winds. and by being able to get to this message, you have completed the quest!'