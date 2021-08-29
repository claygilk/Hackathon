import { createStore } from 'vuex'
const _ = require('lodash')


export default createStore({
  state: {
    deck: [],
    playerHand1: [],
    selectedTile: null,
    pickup: false,
    currentWord: [],
    currentCellIds: [],
    lifeLines: 3,
    isGameStarted: false,
    starterTiles: [],
    starterTileIds: [],
    currentScore: 0,
    currentUserInitials: 'AAA'
  },
  mutations: {
    xStartGame(){
      this.state.isGameStarted = true
    },
    xResetGame(){
      this.state.isGameStarted = false
      this.state.playerHand1 = []
      this.state.lifeLines = 3
      this.state.starterTiles = []
      this.state.currentScore = 0
      this.state.currentWord = []
      this.state.selectedTile = null
      this.state.pickup = false

    },
    xResetCurrentWord() {
      this.state.currentWord = []
      this.state.currentCellIds = []
    },
    xSelectTile(state, letter){
      this.state.selectedTile = letter
      this.state.pickup = true
    },
    xPlaceTile(state, tile){
      
      // reset selected tile since tile is now placed on the board
      this.state.selectedTile = null

      // get index of letter from player's hand
      const index = this.state.playerHand1.indexOf(tile.letter);

      // remove that letter from the player's hand
      this.state.playerHand1.splice(index, 1);

      // add that letter to currentWord
      this.state.currentWord.push(tile.letter)

      // track where tiles are being placed so that they can be removed if not a word
      this.state.currentCellIds.push(tile.cellId)
    },
    xReturnWordToHand(){
      this.state.currentWord.forEach(letter => {
        this.state.playerHand1.push(letter)
      })
    },
    xDrawStarterTiles(){
      if (this.state.deck.length > 0) {
        // get random index from deck
        let rand = _.random(0, this.state.deck.length - 1)

        // get value of tile at random index
        let tileToAdd = this.state.deck[rand]

        // remove tile from deck
        this.state.deck.splice(rand, 1)

        // add new tile to player hand
        this.state.starterTiles.push(tileToAdd)
      }
    },
    xDealHand() {
      
      while(this.state.playerHand1.length < 10){
        
        if (this.state.deck.length > 0) {
          // get random index from deck
          let rand = _.random(0, this.state.deck.length - 1)
  
          // get value of tile at random index
          let tileToAdd = this.state.deck[rand]
  
          // remove tile from deck
          this.state.deck.splice(rand, 1)
          
          // add new tile to player hand
          this.state.playerHand1.push(tileToAdd)
  
        } else {
          return
        }
      }
    },
    xCreateDeck() {
      this.state.deck = []
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
    },
    xEmptyHand(){
      
      this.state.playerHand1.forEach(tile => {
        this.state.deck.push(tile)
      })

      this.state.playerHand1 = []
    }

  },
  actions: {
  },
  modules: {
  }
})
