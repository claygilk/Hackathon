<template>
  <div >
      <ul class="hand">
          <!-- <div v-for="(item, i) in items" :key="i"></div> -->
          <li @dragstart="startDrag($event, tile)" draggable="true" @click="selectTile(tile)" class="tile" v-for="(tile, i) in hand" :key="tile + i">{{ tile }}</li>
      </ul>

      <button @click="drawMoreTiles" :disabled="!this.$store.state.isGameStarted">Draw</button>
      <button @click="newHand">Get New Hand</button>
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
            this.$store.commit('xEmptyHand')
            this.$store.commit('xDealHand')
        },
        startDrag(event, tile){
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('letter', tile)
            this.selectTile(tile)

            console.log('startDrag')
        }
    },
    computed: {
        hand(){
            return this.$store.state.playerHand1
        },
        
    }
}
</script>

<style>
ul.hand{
    display: flex;
    flex-direction: row;
}
li.tile {
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0.5em;
    /* for some reason setting the padding like this vertically centers the letters */
    padding: 0.6em;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fcde65;
}
</style>