<template>
  <div >
    <ul class="hand">
        <!-- <div v-for="(item, i) in items" :key="i"></div> -->
        <li 
        @dragstart="startDrag($event, tile)" 
        @click="selectTile(tile)" 
        draggable="true" 
        class="tile" 
        v-for="(tile, i) in hand" :key="tile + i"
        >
        <div>{{ tile }}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        selectTile(letter){
            this.$store.commit('xSelectTile', letter)
        },
        drawMoreTiles(){
            this.$store.commit('xDealHand')
        },
        newHand(){
            console.log('newHand()')
            this.$store.commit('xEmptyHand')
            this.$store.commit('xDealHand')
            this.$store.state.lifeLines--
        },
        startDrag(event, tile){
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('letter', tile)
            this.selectTile(tile)
        }
    },
    computed: {
        hand(){
            return this.$store.state.playerHand1
        },
        canDrawMore(){
            return false
        }
    },
    created(){
        this.emitter.on('pressNewHand', () => {
            this.newHand()
        })
    }
}
</script>

<style lang="scss">
ul.hand{
    display: flex;
    flex-direction: row;
    border: 2px solid #fcde65;
    box-shadow: 0px 0px 4px 4px #ffc43863;
    border-radius: 20px;
    margin-left: 3em;
    margin-right: 3em;
    justify-content: space-around;
    align-items: center;
    height: 3em;
    padding-left: 0;
}

ul.hand > li.tile {
    color: #ffc438;
    text-shadow:  2px 2px 5px #ffc338ab;
    box-shadow: inset 0px 0px 3px 3px #fcde65ea;
    font-family: 'VT323', monospace;
    font-size: 1.5rem;
    font-weight: 500;
    width: 35px;
    height: 35px;
    border-radius:20%;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
    cursor: grab;

    &:hover{
        text-shadow: 3px 3px 6px #ffd268ab;
        box-shadow: inset  0px 0px 4px 4px #f8df7dea;
    }
}

@media only screen and (max-width: 760px){
    ul.hand > li.tile {
        width: 25px;
        height: 25px;
    }
}

@media only screen and (max-width: 560px){
    ul.hand > li.tile {
        width: 20px;
        height: 20px;
    }

}

div.button-lives{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

p{
    color: #ffc438;
    font-size: 2em;
}
</style>