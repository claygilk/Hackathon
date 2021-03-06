const assert = require('assert')
const gridReader = require('../src/engine/gridReader')
const lookupService = require('../src/services/lookupService')
const _ = require('lodash')

describe('Parses row or column correctly', () => {

    it('Splits word on spaces', done => {

        let letterArray = ['D', 'O', 'G', '' , 'H', 'I']

        let actual = gridReader.letterArrayToStringArray(letterArray)

        assert(_.isEqual(actual, ['DOG', 'HI']))
        done()
    })

})

const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

describe('Make list of columns and rows', () => {

    it('Makes list of columns', done => {

        let actual = gridReader.createColumnIds(rows, columns)
        let firstColumn = actual[0]

        assert(firstColumn[0] === '1x1')
        done()
    })

    it('Makes list of rows', done => {

        let actual = gridReader.createRowIds(rows, columns)
        let firstRow = actual[0]

        assert(firstRow[0] === '1x1')
        done()
    })
})

describe('Letter array of real words passes', () => {

    it("['D', 'O', 'G', '&nbsp;', 'H', 'I'] passes", done => {

        let letterArray = ['D', 'O', 'G', '', 'H', 'I']

        let wordArray = gridReader.letterArrayToStringArray(letterArray)
        
        let allValid = lookupService.lookupWordArray(wordArray)
        
        assert(allValid == true)
        done()
    })

})

describe('Letter array with unreal word fails', () => {

    it("['X', 'Y', 'Z', 'A', 'B', 'C', '&nbsp;', 'H', 'I'] passes", done => {

        let letterArray = ['X', 'Y', 'Z', 'A', 'B', 'C', '', 'H', 'I']

        let wordArray = gridReader.letterArrayToStringArray(letterArray)
        
        let allValid = lookupService.lookupWordArray(wordArray)
        
        assert(allValid == false)
        done()
    })

})

describe('Generate ids of all adjacent cells', () => {

    it('3x3 returns correct ids', done => {

        let ids = gridReader.getAdjecntCellIds('3x3')

        assert(_.isEqual(ids , [ '2x3', '3x2', '3x4', '4x3' ]))
        done()
    })

    it('1x1 returns correct ids', done => {

        let ids = gridReader.getAdjecntCellIds("1x1")
        
        assert(_.isEqual(ids , [ '1x2', '2x1' ]))
        done()
    })

    it('8x1 returns correct ids', done => {

        let ids = gridReader.getAdjecntCellIds("8x1")
        
        assert(_.isEqual(ids , [ '7x1', '8x2', '9x1' ]))
        done()
    })
})