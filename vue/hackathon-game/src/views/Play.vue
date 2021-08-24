<template>
  <h1 @click="deal">Play!</h1>
  <GameGrid @place="placeTile(letter)"/>
  <Hand @selected="dragTile"/>
</template>

<script>
import GameGrid from '../components/GameGrid.vue'
import Hand from '../components/Hand.vue'

export default {
  components: {
    GameGrid,
    Hand
  },
  methods: {
    deal(){
      this.$store.commit('DEAL_HAND')
    },
    dragTile(letter) {
      console.log('you picked ' + letter)
    }
  },
  created() {
    this.$store.commit('CREATE_DECK')
  }

}
</script>

<style>

</style>