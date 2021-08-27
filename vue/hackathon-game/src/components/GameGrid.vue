<template>
    <div>
        <table class="grid">
            <tr v-for="row in height" :key="row"> 
                <td 
                class="empty-square" 
                v-for="column in width" 
                :key="column" 
                :id="row + 'x' + column"
                @click="placeTile(row + 'x' + column)"
                ></td>
                <!-- &nbsp; -->
            </tr>
            
        </table>
        <button @click="readGrid()">Done Spelling</button>
    </div>
</template>

<script>
import gridReader from '../engine/gridReader'
import lookupService from '../services/lookupService'

export default {
    
    data(){
        return {
            height: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            width: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            allRowsCols: [],
            allWords: []
        }
    },

    methods: {
        placeTile(tileId) {
            let cell = event.target
            
            let letter = this.$store.state.selectedTile

            let cellId = cell.id

            cell.innerText = letter 
            
            this.$store.commit('xPlaceTile', {letter, cellId})
        },
        undoWord(){
            console.log('undoWord()')

            console.log(this.$store.state.currentCellIds)

            this.$store.state.currentCellIds.forEach(cell => {
                console.log('clearing ' + cell)
                let toClear = document.getElementById(cell)
                toClear.innerHTML = '&nbsp;'
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

            let allWords = []

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
        }
    },

    created(){
        this.emitter.on('undoWord', () => {
            this.undoWord()
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
    background-color: #55bcfb;
}

.grid{
    border-spacing: 5px;

}
</style>