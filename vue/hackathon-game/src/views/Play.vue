<template>
  <div>
    <div class="play-display">
      <button class="btn-outline" v-if="!this.$store.state.isGameStarted" @click="startGame">NEW GAME</button>
      <button class="btn-outline" v-if="this.$store.state.isGameStarted" @click="endGame">GIVE UP</button>

      <h2>Score: {{ this.$store.state.currentScore }}</h2>
      
      <GameGrid @place="placeTile(letter)" @doneSpelling="submitWord"/>

      <Hand/>

      <GameOver @close="closeGameOver" v-if="gameOver"/>
    </div>
  </div>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'
import tileGenerator from '../engine/tileGenerator'
import GameOver from '../components/GameOver.vue'
import scoreService from '../services/scoreService'

export default {
  components: {
    GameGrid,
    Hand,
    tileGenerator,
    GameOver
  },
  data() {
    return{
      isSpelling: false,
      gameOver: false
    }
  },
  methods: {
    startGame(){
      this.$store.commit('xStartGame')
      this.$store.commit('xDealHand')
      let cellIds = tileGenerator.getStarterTileIds()
      this.$store.state.starterTileIds = cellIds

      cellIds.forEach(id => {
        this.$store.commit('xDrawStarterTiles')
      })

      this.emitter.emit('startGame')
    },
    endGame(){
      this.$store.commit('xEmptyHand')
      this.$store.state.isGameStarted = false
      this.gameOver = true;
    },
    submitWord(){
      console.log('submitWord()')

      this.emitter.emit('doneSpelling')
      this.$store.commit('xDealHand')
      this.$store.commit('xResetCurrentWord')
    },
    closeGameOver(playerInitials){
      scoreService.addScore(playerInitials, this.$store.state.currentScore)
        .then(() => {
          console.log('then block')
          this.$router.push('Scoreboard')
          this.gameOver = false

        })
    }
  },
  created() {
    this.$store.commit('xCreateDeck')
    this.$store.commit('xResetGame')
  }
}
</script>

<style lang="scss">

h2{
  font-family: 'VT323', monospace;
  font-weight: normal;
  color: #ffc438;
  font-size: 2em;

}

.play-display{
  background-color: #030B12;
  box-shadow:  0px 0px 4px 4px #34a3cca9;
  width: 75vw;
  height: 150vh;
  text-align: center;
}

button.btn-outline{
  display: inline-block;
  border: none;
  border: 1.5px solid #ffc438;
  color: #ffc33873;
  background-color: #030B12;
  font-size: 2em;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 3px #fcde65b7;
  text-shadow: inset 1px 1px 10px #fcde65ea;
  margin-top: 50px;
  cursor: pointer;
  padding: 7.5px 15px;
  
  &:active{
  box-shadow: 0px 0px 4px 4px #fcde6593;
  }

  &:hover{
    color: #ffc438;
    box-shadow: 0px 0px 5px 5px #fbe37fb7;
    text-shadow:  1px 1px 10px #fcde65ea;
  }
}

button.push-btn {
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

  &:disabled{
    box-shadow: 0 2px rgba(243, 117, 195, 0.575);
    transform: translateY(4px);
    cursor: not-allowed;
  }
}

/* button:hover {background-color: #e642b4} */

button.push-btn:active {
  /* background-color: #3e8e41; */
  box-shadow: 0 2px rgba(243, 117, 195, 0.575);
  transform: translateY(4px);
}
</style>