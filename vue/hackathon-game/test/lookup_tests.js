const assert = require('assert')
const lookupService = require('../src/services/lookupService')


describe('Lookup service', () => {

    // lookupService.createDict()
    
    it('dog is a real word', done => {


        let actual = lookupService.lookupWord('dog')

        assert(actual === true)
        done()
    })

    it('abcxyz123 is not a real word', done => {

        let actual = lookupService.lookupWord('abcxyz123')

        assert(actual === false)
        done()
    })

    it('"dog" and "abcxyz123" return false', done => {

        let words = ['dog','abcxyz123']

        let actual = lookupService.lookupWordArray(words)

        assert(actual === false)
        done()
    })

    it('"dog" and "cat" return true', done => {

        let words = ['dog','cat']

        let actual = lookupService.lookupWordArray(words)

        assert(actual === true)
        done()
    })

})