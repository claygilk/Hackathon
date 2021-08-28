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
    <div class="button-lives">
        <div>
            <button 
            class="push-btn" 
            @click="newHand" 
            :disabled="!this.$store.state.isGameStarted||this.$store.state.lifeLines===0">
            Get New Hand
            </button>
        </div>
        <div>
            <p>Lives: {{this.$store.state.lifeLines}}</p>
        </div>
    </div>
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
        
    }
}
</script>

<style>
ul.hand{
    display: flex;
    flex-direction: row;
    border: 3px solid #fcde65;
    box-shadow: 0px 0px 4px 4px #ffc33863;
    border-radius: 20px;
    margin-left: 3em;
    margin-right: 3em;
    justify-content: center;
    align-items: center;
    height: 80px;
}
li.tile {
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 0.5em;
    margin-right: 0.5em;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fcde65;
    color: black;
    font-family: 'VT323', monospace;
    font-size: 2.75em;
    font-weight: 500;
    display: flex;
    align-items: center;
}
div.button-lives{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

p{
    color: #fcde65;
    font-size: 2em;
}
</style>