import axios from 'axios'

export default {

    lookupWord(word){
        let string = arrayToString(word)

        return axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + string)
    }
}

function arrayToString(charArray) {

    let string = ''

    charArray.forEach(char => {
        string += char.toLowerCase()
    })

    return string
}