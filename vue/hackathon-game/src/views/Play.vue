<template>
  <div class="main-view">
    <div class="play-display">
      <div class="buttons">
        <button class="btn-outline" v-if="!this.$store.state.isGameStarted" @click="startGame">NEW GAME</button>
        <button class="btn-outline" v-if="this.$store.state.isGameStarted" @click="endGame">GIVE UP</button>
        
        <!-- @click="readGrid()"  -->
        <button 
        class="btn-outline"
        @click="pressDone" 
        :disabled="!this.$store.state.isGameStarted||this.$store.state.currentWord.length<2">
        DONE 
        </button>

        <!-- @click="newHand"  -->
        <button 
        class="btn-outline" 
        @click="pressNewHand"
        :disabled="!this.$store.state.isGameStarted||this.$store.state.lifeLines===0">
        NEW HAND
        </button>

      </div>

      <GameGrid @place="placeTile(letter)" @doneSpelling="submitWord"/>

      <Hand/>

      <div class="score-lives">
        <h2>Score: {{ this.$store.state.currentScore }}</h2>
        <h2>Lives: {{this.$store.state.lifeLines}}</h2>
      </div>

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
    },
    pressDone(){
      console.log('handlePressDone()')
      this.emitter.emit('pressDone')
    },
    pressNewHand(){
      console.log('pressNewHand()')
      this.$store.state.lifeLines--
      this.emitter.emit('pressNewHand')
    }
  },
  created() {
    this.$store.commit('xCreateDeck')
    this.$store.commit('xResetGame')
  }
}
</script>

<style lang="scss">

.play-display{
  background-color: #030B12;
  box-shadow:  0px 0px 4px 4px #34a3cca9;
  width: 75vw;
  height: auto;
  text-align: center;
}

div.buttons{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
}

button.btn-outline{
  display: inline-block;
  border: none;
  border: 1.5px solid #ffc438;
  color: #ffc33873;
  background-color: #030B12;
  font-size: 1.75em;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 3px #fcde65b7;
  margin-top: 50px;
  cursor: pointer;
  padding: 5px 15px;
  
  &:active{
  box-shadow: 0px 0px 4px 4px #fcde6593;
  }

  &:hover{
    color: #ffc438;
    box-shadow: 0px 0px 5px 5px #fbe37fb7;
    text-shadow:  1px 1px 10px #fcde65ea;
  }

  &:disabled{
    cursor: not-allowed;
    &:hover{
      box-shadow: 0px 0px 3px 3px #fcde65b7;
      color: #ffc33873;
      text-shadow: none;


    }
  }
}


h2{
  font-family: 'VT323', monospace;
  font-weight: normal;
  color: #ffc438;
  font-size: 2em;
}

div.score-lives{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>