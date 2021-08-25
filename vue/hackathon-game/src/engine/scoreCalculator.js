

    
    const calcWordScore = (letterArray) => {
    
        let total
    
        letterArray.forEach(letter => {
            total++
        })
    
        return total
    }

    module.exports = {
        calcWordScore
    }