// const fs = require('fs')
// const path = require('path')

// let rawdata = fs.readFileSync( path.resolve(__dirname, './words_dictionary.json'), 'utf-8')
// let dictionary = JSON.parse(rawdata)
// import dictionary from './words_dictionary.json'
const dictionary = require('./words_dictionary.json')


const lookupWord = (word) => { 

    if(dictionary.hasOwnProperty(word.toLowerCase())){
        return true
    }
    else {
        return false
    }
}

const lookupWordArray = (wordArray) => {

    let allValid = true

    wordArray.forEach(word => {
        if(!lookupWord(word)){
            allValid = false
        }
    })

    return allValid
}

module.exports = {
    lookupWord,
    lookupWordArray
}