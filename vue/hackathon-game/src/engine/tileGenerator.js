const _ = require('lodash')

const getStarterTileIds = () => {

    let numTiles = 5

    let cellIds = ['3x3', '3x13', '8x8', '13x3', '13x13']

    // for (let i = 0; i < numTiles; i++) {
        
    //     let row = _.random(1,15)
    //     let col = _.random(1,15)
    //     let id = row + 'x' + col
    //     cellIds.push(id)
        
    // }
    console.log('setStarterTiles()')

    return cellIds

}

module.exports = {
    getStarterTileIds
}