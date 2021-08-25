<template>
  <button @click="deal">New Game</button>
  <GameGrid @place="placeTile(letter)"/>
  <Hand @selected="dragTile"/>
  <button @click.prevent="submitWord">Submit</button>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'
import scoreCalculator from '../engine/scoreCalculator'

export default {
  components: {
    GameGrid,
    Hand,
    scoreCalculator
  },
  data() {
    return{
      isSpelling: false,
      currentWord: []
    }
  },
  methods: {
    deal(){
      this.$store.commit('DEAL_HAND')
    },
    dragTile(letter) {
      console.log('drag tile ' + letter)
    },
    placeTile(letter){
      
      letter = this.$store.state.selectedTile
      this.currentWord.push(letter)
    },
    submitWord(){
      console.log( this.currentWord + ' is (not) a word' )
      let points = scoreCalculator.calcWordScore(this.currentWord)
      console.log('Points: ' + points)
    }
  },
  created() {
    this.$store.commit('CREATE_DECK')
  }

}
</script>

<style>

</style>