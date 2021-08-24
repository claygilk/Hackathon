import { createStore } from 'vuex'
const _ = require('lodash')


export default createStore({
  state: {
    deck: [],
    playerHand1: [],
    selectedTile: null,
    pickup: false
  },
  mutations: {
    SELECT_TILE(state, letter){
      this.state.selectedTile = letter
      this.state.pickup = true
    },
    PLACE_TILE(state, letter){
      
      this.state.selectedTile = null

      const index = this.state.playerHand1.indexOf(letter);

      this.state.playerHand1.splice(index, 1);
      
    },
    DEAL_HAND() {
      
      while(this.state.playerHand1.length < 7){
        
        if (this.state.deck.length > 0) {
          // get random index from deck
          let rand = _.random(0, this.state.deck.length)
  
          // get value of tile at random index
          let tileToAdd = this.state.deck[rand]
  
          // add new tile to player hand
          this.state.playerHand1.push(tileToAdd)
  
          // remove tile from deck
          this.state.deck.splice(rand, 1)
        } else {
          return
        }
      }
    },
    CREATE_DECK() {
      console.log('Creating deck...')

      for (let i = 0; i < 9; i++){
        this.state.deck.push('A')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('B')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('C')
      }
      for (let i = 0; i < 4; i++){
        this.state.deck.push('D')
      }
      for (let i = 0; i < 12; i++){
        this.state.deck.push('E')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('F')
      }
      for (let i = 0; i < 3; i++){
        this.state.deck.push('G')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('H')
      }
      for (let i = 0; i < 9; i++){
        this.state.deck.push('I')
      }
      for (let i = 0; i < 1; i++){
        this.state.deck.push('J')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('K')
      }
      for (let i = 0; i < 4; i++){
        this.state.deck.push('L')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('M')
      }
      for (let i = 0; i < 6; i++){
        this.state.deck.push('N')
      }
      for (let i = 0; i < 8; i++){
        this.state.deck.push('O')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('P')
      }
      for (let i = 0; i < 1; i++){
        this.state.deck.push('Q')
      }
      for (let i = 0; i < 6; i++){
        this.state.deck.push('R')
      }
      for (let i = 0; i < 4; i++){
        this.state.deck.push('S')
      }
      for (let i = 0; i < 6; i++){
        this.state.deck.push('T')
      }
      for (let i = 0; i < 4; i++){
        this.state.deck.push('U')
      }
      for (let i = 0; i < 4; i++){
        this.state.deck.push('U')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('V')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('W')
      }
      for (let i = 0; i < 1; i++){
        this.state.deck.push('X')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('Y')
      }
      for (let i = 0; i < 2; i++){
        this.state.deck.push('Z')
      }
    }

  },
  actions: {
  },
  modules: {
  }
})

function dealHand() {
  console.log('hand delt')
}
