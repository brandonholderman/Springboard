let lower = 'abcdefghijklmnopqrstuvwxyz'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



function letterOccurrence(word) {
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
        if (counted[j] !== undefined) {
            counted[j]++
        } else {
            counted[j] = 1
        }
    }
    return counted
}