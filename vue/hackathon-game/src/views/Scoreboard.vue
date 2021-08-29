<template>
  <div id="view">
    <div class="scoreboard">
      <h1>Leaderboards</h1>
      <Scores/>
    </div>
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
  font-weight: normal;
}

div.scoreboard{
  background-color: #030B12;
  // border-left: 3px solid #34A3CC;
  // border-right: 3px solid #34A3CC;
  box-shadow:  0px 0px 4px 4px #34a3cca9;

  width: 75vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

</style>