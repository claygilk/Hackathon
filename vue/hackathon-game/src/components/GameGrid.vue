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
                >
                
                </td>
            </tr>
            
        </table>
        <p>{{clearWord}}</p>
    </div>
</template>

<script>
export default {
    props: {
        clearWord: Boolean
    },
    data(){
        return {
            height: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            width: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
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
        clearWord(){
            console.log(this.cellsToClear)

            this.$emit('cleared')
        }
    },
    computed: {
        cellsToClear(){
            return this.$store.state.currentCellIds
        },
    },
    watch: {
        clearWord: (newVal, oldVal) => {
            console.log('clear triggered')
            this.clearWord()
        }
    }

}
</script>

<style>
.empty-square{
    border: 1px solid black;
    /* width: 20px; */
    padding: 1.3em;
}
.grid{
    border-spacing: 5px;

}
</style>