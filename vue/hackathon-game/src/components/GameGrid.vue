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
                >&nbsp;</td>
            </tr>
            
        </table>
        <button @click="readGrid()">Test</button>
    </div>
</template>

<script>
import gridReader from '../engine/gridReader'

export default {
    
    data(){
        return {
            height: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            width: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
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
            let cols = this.readCols()
            this.allWords = this.allWords.concat(cols)

            let rows = this.readRows()
            this.allWords = this.allWords.concat(rows)

            console.log(this.allWords)
        },
        readCols(){
            const cellsByColumn = gridReader.createColumns(this.height, this.width)
            
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
            const cellsByRow = gridReader.createRows(this.height, this.width)

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
}

.grid{
    border-spacing: 5px;

}
</style>