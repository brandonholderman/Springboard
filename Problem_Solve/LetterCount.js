let lower = 'abcdefghijklmnopqrstuvwxyz'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()


function letterOccurrence(word) {
    let count = 0
    let lowerArr = []
    let upperArr = []

    let counted = {}

    for (let i of word) {
        let currLetter = i
        let lowerIndex = lower.indexOf(currLetter)
        let upperIndex = upper.indexOf(currLetter)

        if (currLetter === lower[lowerIndex]) {
            lowerArr.push(currLetter)
        } else if (currLetter === upper[upperIndex]) {
            upperArr.push(currLetter)
        }
    }

    for (let j of lowerArr) {
        let nonUnique = j

        if (lowerArr.indexOf(lowerArr[nonUnique]) === nonUnique) {

    }
    return counted
}