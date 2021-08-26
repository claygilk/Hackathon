const assert = require('assert')
const gridReader = require('../src/engine/gridReader')
// import gridReader from '../src/engine/gridReader'
const _ = require('lodash')

describe('Parses row or column correctly', () => {

    it('Splits word on spaces', done => {

        let letterArray = ['D', 'O', 'G', '&nbsp;' , 'H', 'I']

        let actual = gridReader.readLine(letterArray)

        assert(_.isEqual(actual, ['DOG', 'HI']))
        done()
    })

})

const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

describe('Make list of columns and rows', () => {

    it('Makes list of columns', done => {

        let actual = gridReader.createColumns(rows, columns)
        let firstColumn = actual[0]

        assert(firstColumn[0] === '1x1')
        done()
    })

    it('Makes list of rows', done => {

        let actual = gridReader.createRows(rows, columns)
        let firstRow = actual[0]

        assert(firstRow[0] === '1x1')
        done()
    })
})

describe('Looks up words from array of letters', () => {

    it("['D', 'O', 'G', '&nbsp;', 'H', 'I'] passes", done => {

        let test = ['D', 'O', 'G', '&nbsp;', 'H', 'I']

        let actual = gridReader.checkWords(test)

        assert(actual === true)
        done()

    })

    it("['X', 'Y', 'Z' '&nbsp;', 'H', 'I'] fails", done => {

        let test = ['X', 'Y', 'Z', '&nbsp;', 'H', 'I']

        let actual = gridReader.checkWords(test)
        console.log('Actual ' + actual)
        assert(actual === false)
        done()

    })
})