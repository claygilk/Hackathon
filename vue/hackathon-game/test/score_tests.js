const assert = require('assert')
// import calc from '../src/engine/scoreCalculator.js'
const calc = require('../src/engine/scoreCalculator')

describe('Calulates point totals correctly', () => {

    it('DOG is worth 5 points', done => {

        let letterArray = ['D', 'O', 'G']

        let actual = calc.calcWordScore(letterArray)

        assert(actual === 5)
        done()
    })

    it('THE is worth 6 points', done => {
        let letterArray = ['T', 'H', 'E']

        let actual = calc.calcWordScore(letterArray)

        assert(actual === 6)
        done()
    })
})