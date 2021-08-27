<template>
  <div id="view">
    <h1>Leaderboards</h1>
    <Scores/>
  </div>
</template>

<script>
import Scores from '../components/Scores.vue'

export default {

    components: {
      Scores
    }

}
</script>

<style lang="scss">

#view{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #303134;
  color: white;


}

h1{
  font-family: 'VT323', monospace;
  font-size: 2.5em;
}

</style>