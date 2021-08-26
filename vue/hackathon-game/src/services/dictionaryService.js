// import axios from 'axios'
const axios = require('axios')



const lookupWord = (word) => { 
    // let string = arrayToString(word)

    return axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
}
// axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
//     const responseOne = responses[0]
//     const responseTwo = responses[1]
//     const responesThree = responses[2]
//     //use/access the results 
//   })).catch(errors => {
//     //react on errors.
//   })
const lookupWordArray = (wordArray) => {

    let allCalls = []

    wordArray.forEach(word => {
        const call = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        
        allCalls.push(call)
    })

    axios.all(allCalls.then(axios.spread((...responses) => {
        console.log(responses)
        return responses
    }))
    .catch(err => {
        console.log(err)
    }))
}


const arrayToString = (charArray) => {
    console.log('charArray = ' + charArray)
    let string = ''

    charArray.forEach(char => {
        string += char.toLowerCase()
    })

    return string
}

module.exports = {
    lookupWord
}