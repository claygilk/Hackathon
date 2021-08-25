const assert = require('assert')
// import calc from '../src/engine/scoreCalculator.js'
const calc = require('../src/engine/scoreCalculator')

describe('Calulates point totals correctly', () => {

    it('Calculates point total of word correctly', done => {

        let letterArray = ['D', 'O', 'G']

        let actual = calc.calcWordScore(letterArray)

        assert(actual === 5)

    })
})