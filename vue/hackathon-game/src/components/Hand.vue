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
            this.$store.commit('SELECT_TILE', letter)
        },
        drawMoreTiles(){
            this.$store.commit('DEAL_HAND')
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
    margin: 0.5em;
    /* height: 55px; */
    box-sizing: border-box;
    width: 100px;
    padding: 25px;
    text-align: center;
    justify-content: center;
}
</style>