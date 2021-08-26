<template>
  <div class="play-display">
    <button @click="deal">New Game</button>
    <h5>Score: {{ currentScore }}</h5>
    
    <GameGrid @place="placeTile(letter)"/>

    <Hand/>
    
    <button @click.prevent="submitWord">Submit</button>
  </div>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'
import scoreCalculator from '../engine/scoreCalculator'
import dictionaryService from '../services/dictionaryService'
import {bus} from '../main'

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
    }
  },
  methods: {
    deal(){
      this.$store.commit('xDealHand')
    },
    submitWord(){
      let word = this.$store.state.currentWord
      console.log('submitWord()')

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
          this.emitter.emit('undoWord')
        })
        .finally(() => {
          this.$store.commit('xResetCurrentWord')
        })
    }
  },
  created() {
    this.$store.commit('xCreateDeck')
  }

}
</script>

<style>
.play-display {
  /* display: grid;
  grid-template-areas: "filt main ad";
  grid-template-columns: 17.5rem auto 17.5rem; */
  background-size: contain;
  background-image: url("../assets/background.jpg")
}
</style>