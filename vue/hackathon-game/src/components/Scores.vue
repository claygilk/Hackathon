<template>
  <div id="scores">

    <div class="heading">
      <h2>Top 10 Highscores</h2>
    </div>
    <ul class="score-list">
      <li v-for="score in highScores" :key="score._id"> 
        <div>{{score.username}}</div>
        <div>{{score.point_total}}</div>
      </li>
    </ul>

    <div class="heading">
      <h2>Top Scores For
        <form @submit.prevent="getScores">
          <input 
          id="initials" 
          type="text" 
          maxlength="3" 
          autocomplete="off"
          v-model="initials"
          onkeypress="return /[a-z]/i.test(event.key)"
          >
        </form>
      </h2>
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
      userScores: null,
      initials: 'AAA',
    }
  },
  created() {
    this.getScores()
  },
  methods:{
    getScores(){
      scoreService.getScores()
        .then(response => {
          this.highScores = response.data
        })
        .catch(err => {
          console.log(err)
        })

      scoreService.getUserScores(this.initials.toUpperCase())
        .then(response => {
          this.userScores = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">

#scores {
  font-family: 'VT323', monospace;
  width: 25vw;
  height: auto;
}

.heading{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  text-align: center;
}

li{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5em;
  color: white;
  &:hover{
    color: #ffc438
  }
}

ul.score-list {
  padding: 0;
  height: 300px;
}

input{
  color:#ffc438;
  background-color: #030B12;
  border: none;
  font-size: 1em;
  width: 4em;
  text-align: center;
  text-transform:uppercase;
  border-style: none;
}

input:focus{
  outline: none;
}
</style>