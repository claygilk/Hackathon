const dict = require('../services/dictionaryService')
// import dictionaryService from '../services/dictionaryService.js'

const readLine = (cellArray) => {

    let wordArray = []

    let word = ''

    cellArray.forEach(cell => {
        
        if(cell !== '&nbsp;'){
            word += cell
        }
        else {
            wordArray.push(word)
            word = ''
        }
    })

    wordArray.push(word)

    return wordArray
}



const checkWords = (letterArray) => {

    let areValid = true

    let wordArray = readLine(letterArray)

    wordArray.forEach(word => {

        dict.lookupWord(word)
            .then(response => {
                console.log('then')
            })
            .catch(err => {
                // console.log('not a real word')
                console.log('catch')

                areValid = false
                return areValid
            })
            .finally(response => {
                console.log('finally')
            })

    })
    // console.log('are valid is ' + areValid)
    console.log('return')
    return areValid
}


const createColumns = (rows, cols) => {
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

const createRows = (rows, cols) => {
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
    readLine,
    createColumns,
    createRows,
    checkWords,
}