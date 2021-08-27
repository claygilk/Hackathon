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

<style>

#view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202a25;
}

h1{
  font-family: 'VT323', monospace;
  font-size: 2.5em;
}

</style>