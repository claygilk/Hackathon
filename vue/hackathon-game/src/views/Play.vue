<template>
  <div>
    <button @click="deal">New Game</button>
    <h5>Score: {{ currentScore }}</h5>
    
    <GameGrid 
    @place="placeTile(letter)" 
    :clearWord="clearLastWord" 
    @cleared="clearLastWord=!clearLastWord"
    />

    <Hand/>
    
    <button @click.prevent="submitWord">Submit</button>
  </div>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'
import scoreCalculator from '../engine/scoreCalculator'
import dictionaryService from '../services/dictionaryService'

export default {
  components: {
    GameGrid,
    Hand,
    scoreCalculator
  },
  data() {
    return{
      isSpelling: false,
      currentScore: 0,
      clearLastWord: false,
    }
  },
  methods: {
    deal(){
      this.$store.commit('xDealHand')
    },
    submitWord(){
      let word = this.$store.state.currentWord

      dictionaryService.lookupWord(word)
        .then(response => {
          
          if(response.status === 200){
            
            let points = scoreCalculator.calcWordScore(word)
            this.currentScore += points
            console.log(word + ' is worth ' + points + 'points')
          } 
        })
        .catch(err => {
          console.log(word + ' is not a word')

          this.removeWordFromGrid()
        })
        .finally(() => {
          this.resetCurrentWord()
          this.clearLastWord = true
        })
    },
    resetCurrentWord(){
      this.$store.commit('xResetCurrentWord')
    },
    removeWordFromGrid(){
      console.log('remove')
    }
  },
  created() {
    this.$store.commit('xCreateDeck')
  }

}
</script>

<style>

</style>