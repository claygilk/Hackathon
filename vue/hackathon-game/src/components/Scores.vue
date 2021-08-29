<template>
  <div id="scores">

    <div class="heading">
      <h2>TOP 10 HIGHSCORES</h2>
    </div>
    <ul class="score-list">
      <li v-for="score in highScores" :key="score._id"> 
        <div>{{score.username}}</div>
        <div>{{score.point_total}}</div>
      </li>
    </ul>

    <div class="heading">
      <h2>YOUR TOP SCORES</h2>
    </div>
    <ul class="score-list">
      <li v-for="score in userScores" :key="score._id"> 
        <div>{{score.username}}</div>
        <div>{{score.point_total}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import scoreService from '../services/scoreService'

export default {
  data() {
    return {
      highScores: null,
      userScores: null
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

    scoreService.getUserScores(this.$store.state.currentUserInitials)
      .then(response => {
        this.userScores = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss">
#scores {
  font-family: 'VT323', monospace;
  width: 25vw;
}

.heading{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
}

li{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5em;
  &:hover{
    color: #ffc438
  }
}

ul.score-list {
  padding: 0;
}
</style>