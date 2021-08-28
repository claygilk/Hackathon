<template>
  <div>
    <div class="play-display">
      <button @click="startGame">New Game</button>

      <h2>Score: {{ currentScore }}</h2>
      
      <GameGrid @place="placeTile(letter)" @doneSpelling="submitWord"/>

      <Hand/>
    </div>
  </div>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'
import scoreCalculator from '../engine/scoreCalculator'
import lookupService from '../services/lookupService'

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
    startGame(){
      this.$store.commit('xStartGame')
      this.$store.commit('xDealHand')
    },
    submitWord(){
      console.log('submitWord()')

      let word = this.$store.state.currentWord
      
      let points = scoreCalculator.calcWordScore(word)
      this.currentScore += points

      console.log(word + ' is worth ' + points + 'points')
      
      this.$store.commit('xResetCurrentWord')
    }
  },
  created() {
    this.$store.commit('xCreateDeck')
  }

}
</script>

<style>

h2{
  font-family: 'VT323', monospace;
  font-weight: normal;
  color: #ffc438;
  font-size: 2em;

}

.play-display{
  background-color: #030B12;
  border-left: 3px solid #34A3CC;
  border-right: 3px solid #34A3CC;
  width: 75vw;
  height: 100vw;
  text-align: center;
  /* overflow: auto; */
}

button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #d158ad;
  border: none;
  border-radius: 15px;
  box-shadow:  0px 5px #a34587;
  font-family: 'VT323', monospace;
  margin-top: 50px;
}

/* button:hover {background-color: #e642b4} */

button:active {
  /* background-color: #3e8e41; */
  box-shadow: 0 2px rgba(243, 117, 195, 0.575);
  transform: translateY(4px);
}
</style>