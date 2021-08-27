
const letterArrayToStringArray = (cellArray) => {

    let wordArray = []

    let word = ''

    cellArray.forEach(cell => {
        
        if(cell !== ""){
            word += cell
        }
        else {
            wordArray.push(word)
            word = ''
        }
    })

    wordArray.push(word)

    wordArray = wordArray.filter(el => {
        return el != ''
    })
    
    return wordArray
}

const checkRowOrColumn = (letterArray) => {

    let wordArray = readLine(letterArray)

    async function callAsync() {

        const realWords = await dict.lookupWordArray(wordArray)
            .then(() => {
    
                console.log('realWords = ' + realWords)
            })
    
        if (realWords.length === wordArray.length) {
            return true
        }
        else {
            return false
        }
    }

    let test = callAsync()
    return test

}    


const createColumnIds = (rows, cols) => {
    let columns = []

    cols.forEach(c => {
        let col = []
        
        rows.forEach(r => {
            let id = r + 'x' + c
            col.push(id)
        })

        columns.push(col)
    })

    return columns
}

const createRowIds = (rows, cols) => {
    let rowArray = []

    rows.forEach(r => {
        let row = []
        
        cols.forEach(c => {
            let id = r + 'x' + c
            row.push(id)
        })

        rowArray.push(row)
    })

    return rowArray
}

module.exports = {
    letterArrayToStringArray,
    createColumnIds,
    createRowIds,
    checkRowOrColumn,
}