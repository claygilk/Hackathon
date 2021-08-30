const scores = new Map()

scores.set('A', 1)
scores.set('E', 1)
scores.set('I', 1)
scores.set('O', 1)
scores.set('U', 1)
scores.set('L', 1)
scores.set('N', 1)
scores.set('S', 1)
scores.set('T', 1)
scores.set('R', 1)

scores.set('D', 2)
scores.set('G', 2)

scores.set('B', 3)
scores.set('C', 3)
scores.set('M', 3)
scores.set('P', 3)

scores.set('F', 4)
scores.set('H', 4)
scores.set('V', 4)
scores.set('W', 4)
scores.set('Y', 4)

scores.set('K', 5)

scores.set('J', 8)
scores.set('X', 8)

scores.set('Q', 10)
scores.set('Z', 10)


const calcWordScore = (word) => {
    
    let letterArray = Array.from(word)

    let total = 0


    letterArray.forEach(letter => {
        points = scores.get(letter)
        total += points
    })

    return total
}

module.exports = {
    calcWordScore
}