<template>
  <div >
      <ul class="hand">
          <li @click="selectTile(tile)" class="tile" v-for="tile in hand" :key="tile">{{ tile }}</li>
      </ul>

      <button @click="drawMoreTiles">Draw</button>
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
}
</style>