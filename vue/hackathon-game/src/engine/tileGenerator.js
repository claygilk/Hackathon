const _ = require('lodash')

const getStarterTileIds = () => {

    let numTiles = 5

    let cellIds = []

    for (let i = 0; i < numTiles; i++) {
        
        let row = _.random(1,15)
        let col = _.random(1,15)
        let id = row + 'x' + col
        cellIds.push(id)
        
    }
    console.log('setStarterTiles()')

    return cellIds

}

module.exports = {
    getStarterTileIds
}