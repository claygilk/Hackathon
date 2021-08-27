<template>
  <div class="play-display">
    <button @click="startGame">New Game</button>

    <h5>Score: {{ currentScore }}</h5>
    
    <GameGrid @place="placeTile(letter)" @doneSpelling="submitWord"/>

    <Hand/>
    
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
.play-display {
  /* display: grid;
  grid-template-areas: "filt main ad";
  grid-template-columns: 17.5rem auto 17.5rem; */
  background-size: contain;
  background-image: url("../assets/background2.jpg")
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

}

/* button:hover {background-color: #e642b4} */

button:active {
  /* background-color: #3e8e41; */
  box-shadow: 0 2px rgba(243, 117, 195, 0.575);
  transform: translateY(4px);
}
</style>