<template>
  <h2>High Scores</h2>
  <ul>
    <li v-for="score in highScores" :key="score._id"> 
      {{score.username}} {{score.point_total}}
    </li>
  </ul>
</template>

<script>
import scoreService from '../services/scoreService'

export default {
  data() {
    return {
      highScores: null
    }
  },
  created() {
    scoreService.getScores()
      .then(response => {
        this.highScores = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>