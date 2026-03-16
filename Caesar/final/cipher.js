const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {

    let encryptedMessage = ''
    let iteration = 0

    for (let i of message) {
        let currIndex = alphabet.indexOf(i.toLowerCase())
    
        if (currIndex === -1) {
            encryptedMessage += i
        } 
        
        if (iteration === 2) {
            encryptedMessage += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        
        let encryptShift = (currIndex += shiftValue) % alphabet.length
        encryptedMessage += alphabet[encryptShift]

        iteration++
    }

    return encryptedMessage;

}

function decrypt(encryptedMessage, shiftValue) {

    let decryptedMessage = ''
    let iteration = 0

    for (let i of encryptedMessage) {
        let currIndex = alphabet.indexOf(i.toLowerCase())

        if (currIndex === -1) {
            decryptedMessage += i
        }

        if (iteration === 3) {
            decryptedMessage += ''
            iteration = 0
        }

        let decryptShift = (currIndex -= shiftValue) % alphabet.length
        decryptedMessage += alphabet[decryptShift]

        iteration++
    }

    return decryptedMessage;

}
