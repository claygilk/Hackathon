<template>
  <div id="scores">

    <div class="heading">
      <h2>Top 10 Highscores</h2>
    </div>

    <ul class="score-list">
      <li class="column-header">
          <span>Rank</span> 
          <div>Score</div>
          <div>Name</div>
      </li>

      <li v-for="(score, i) in highScores" :key="score._id">
          <span class="rank">{{i+1}}</span>
          <div>{{score.point_total}}</div>
          <div class="username">{{score.username}}</div>
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
      <li class="column-header">
          <span>Rank</span> 
          <div>Score</div>
          <div>Name</div>
      </li>
      <li v-for="(score, i) in userScores" :key="score._id">
          <span class="rank">{{i+1}}</span>
          <div>{{score.point_total}}</div>
          <div class="username">{{score.username}}</div>
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
    document.body.style.cursor = 'auto'
    this.initials = this.$store.state.currentUserInitials
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

li.column-header {
  color: #ffc438;
  margin-bottom: 0.5em;
}

div.rank-name{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 125px;
}
.rank{
  width:24px; 
  display: inline-block;
  text-align: end;
}

ul.score-list {
  padding: 0;
  height: 360px;
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

div.username{
  text-align: center;
}
</style>