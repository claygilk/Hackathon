<template>
    <div>
        <table class="grid">
            <tr v-for="row in height" :key="row"> 
                <td 
                @drop="onDrop($event, tile)"
                @dragover.prevent
                @dragenter.prevent
                class="empty-square" 
                v-for="column in width" 
                :key="column" 
                :id="row + 'x' + column"
                ></td>
                <!-- @click="placeTile(row + 'x' + column)" -->
                <!-- &nbsp; -->
            </tr>
            
        </table>
        <button 
        class="push-btn" 
        @click="readGrid()" 
        :disabled="!this.$store.state.isGameStarted||this.$store.state.currentWord.length<3">
        Done Spelling
        </button>
    </div>
</template>

<script>
import gridReader from '../engine/gridReader'
import lookupService from '../services/lookupService'
import scoreCalculator from '../engine/scoreCalculator'

export default {
    
    data(){
        return {
            height: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            width: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            allRowsCols: [],
            allWords: [],
            lastTileId: null
        }
    },

    methods: {
        placeStarterTiles(){
            console.log('placeStarterTiles()')

            for (let i = 0; i < this.$store.state.starterTiles.length; i++) {
                
                let letter = this.$store.state.starterTiles[i]
                
                let cellId = this.$store.state.starterTileIds[i]

                let cell = document.getElementById(cellId)

                cell.innerText = letter
                cell.classList.remove('empty-square')
                cell.classList.add('filled-square')
            }

            let startingDroppable = []

            this.$store.state.starterTileIds.forEach(id => {
                let adjectCells = gridReader.getAdjecntCellIds(id)
                startingDroppable = startingDroppable.concat(adjectCells)
            })

            startingDroppable.forEach(id => {
                document.getElementById(id).classList.add('droppable')
            })
        },
        scoreGrid(){
            console.log('scoreGrid()')

            let totalScore = 0

            this.allWords.forEach(word => {

                let wordScore = scoreCalculator.calcWordScore(word)
                totalScore += wordScore
            })

            console.log(totalScore)
            
            this.$store.state.currentScore = totalScore
        },
        placeTile(tileId) {
            let cell = event.target
            
            let letter = this.$store.state.selectedTile

            let cellId = cell.id

            cell.innerText = letter 
            
            this.$store.commit('xPlaceTile', {letter, cellId})

            cell.classList.remove('empty-square')
            cell.classList.add('filled-square')
            cell.classList.add('latest-tile')
        },
        undoWord(){
            console.log('undoWord()')

            console.log(this.$store.state.currentCellIds)

            this.$store.state.currentCellIds.forEach(cell => {
                let toClear = document.getElementById(cell)
                toClear.innerHTML = '&nbsp;'
                toClear.classList.add('empty-square')
                toClear.classList.remove('filled-square')
            })

            this.$store.commit('xReturnWordToHand')
        },
        readGrid(){
            this.allRowsCols = []
            this.allWords = []

            let cols = this.readCols()
            this.allRowsCols = this.allRowsCols.concat(cols)

            let rows = this.readRows()
            this.allRowsCols = this.allRowsCols.concat(rows)

            this.allRowsCols.forEach(letterArray => {
                let wordArray = gridReader.letterArrayToStringArray(letterArray)

                if(wordArray.length > 0){
                    
                    wordArray.forEach(word => {
                        if (word.length > 1) {
                            
                            this.allWords.push(word)
                        }
                    })
                }
            })

            console.log('allWords ' + this.allWords)

            let allWordsValid = lookupService.lookupWordArray(this.allWords)
            console.log('Grid contains only real words: ' + allWordsValid)

            if(allWordsValid) {
                this.$emit('doneSpelling')
            }
            else {
                this.undoWord()
            }
            this.$store.commit('xResetCurrentWord')

        },
        readCols(){
            const cellsByColumn = gridReader.createColumnIds(this.height, this.width)
            
            let columnArray = []

            cellsByColumn.forEach(column => {
                
                let letterArray = []

                column.forEach(id => {
                    let cell = document.getElementById(id)
                    letterArray.push(cell.innerText)
                })

                columnArray.push(letterArray)
            })

            return columnArray
        },
        readRows(){
            const cellsByRow = gridReader.createRowIds(this.height, this.width)

            let rowArray = []

            cellsByRow.forEach(row => {

                let letterArray = []

                row.forEach(id => {
                    let cell = document.getElementById(id)
                    letterArray.push(cell.innerText)
                })

                rowArray.push(letterArray)
            })

            return rowArray
        },
        onDrop(event){
            
            if(event.target.classList.contains('droppable')){
                
                this.placeTile()

                let cellIds = gridReader.getAdjecntCellIds(event.target.id)
    
                cellIds.forEach(id => {
                    document.getElementById(id).classList.add('droppable')
                })

                this.lastTileId = event.target.id
            }

            this.resetDroppable()
            this.applyDroppaleToAdjacent(this.lastTileId)

        },
        resetDroppable(){
            console.log('resetDroppable')
            let oldDroppable = document.querySelectorAll('.droppable')

            console.log('oldDroppable', + oldDroppable)

            oldDroppable.forEach(cell => {
                cell.classList.remove('droppable')
            })

        },
        applyDroppaleToAdjacent(currentId){

            let adjacentCells = gridReader.getAdjecntCellIds(currentId)

            adjacentCells.forEach(id => {

                let tries = 0 

                let cell = document.getElementById(id)

                if (!cell.classList.contains('filled-square')) {
                    cell.classList.add('droppable')
                }
                else {
                    console.log('applyDroppaleToAdjacent() ' + id)

                    if(tries < 15) {
                        this.applyDroppaleToAdjacent(id)
                    }
                }
                 tries++
                 console.log('tries' + tries)

            })
        }
    },

    created(){
        this.emitter.on('undoWord', () => {
            this.undoWord()
        }),
        this.emitter.on('startGame', () => {
            this.placeStarterTiles()
        })
        this.emitter.on('doneSpelling', () => {
            this.scoreGrid()
        })
    }
}
</script>

<style>
.empty-square{
    border: 1px solid black;
    border-radius:10px;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
    background-color: #34A3CC;
}

.filled-square{
    background-color: #fcde65;
    color: black;
    font-family: 'VT323', monospace;
    font-size: 2.5em;
    font-weight: 500;
    border-radius:10px;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
}

.grid{
    border-spacing: 5px;
    display: grid;
    justify-content: center;

}

.latest-tile{
  box-shadow:  0px 0px 4px 4px #fc65f4a6;

}

.droppable{
  box-shadow:  0px 0px 4px 4px #fcde65a6;

}
</style>