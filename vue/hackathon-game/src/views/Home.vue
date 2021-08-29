<template>
  <div>
    <div class="homepage">
      <h1>Welcome to Scrobble</h1>
      <div>
      <h1>Gameplay</h1>
      <div class="rules">
      <h3>The objective of Scrobble is to spell as many words as you can. Each letter tile has a point value assigned to it, like in Scrabble. The more words you spell, the more points you earn.</h3>
      <h3>To spell a word, click-and-drag a letter tile from your hand to a square on the board. You can only place a tile on an empty square that is vertically or horizontally adjacent to an already placed letter tile. When you start the game, 5 random letter tiles will be placed on the board to get you started.</h3>
      <h3>There are some restrictions with spelling words: You can only spell words from left-to-right, or top-to-bottom. The minimum length for a word is 3 letters.</h3>
      <h3>If you get stuck, and can't spell anymore words you can click the "Get New Hand" button, to return your tiles to the deck and draw 10 more random tiles. Drawing a new hand consume a life, and you only get 3 lives per game. When you run out of lives you can no longer refresh you hand.</h3>
      <h3>When you think you can no longer spell anymore words, press the "Give Up" button. This will end the game and prompt you to enter your initals for a chance to make it onto the leaderboards.</h3>
      </div>
      <h1>
        Development
      </h1>
      <p>
        "what we used to make the game"
      </p>
      </div>
      <div>
      <h1>
        Meet the Engineers
      </h1>
      <div class="profile">
        <div>
          <h2>Clay Gilkerson</h2>
          <img class="clay-pic" src="../assets/claysamazingheadshot.jpg">
          <p class="clayp">Aspiring developer with a passion for learning new technologies and solving interesting problems. Experienced with C#/.NET and Vue.js. Currently learning Node.js and MongoDB.</p>
          <ul class="social-links">
            <li><i class="fab fa-github-square"></i><a href="https://github.com/claygilk"></a></li>
            <li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/clay-gilkerson/"></a></li>
          </ul>
        </div>
        <div>
          <h2>Jamie Mullins</h2>
          <img class="jamie-pic" src="../assets/jamiesamazingheadshot.jpg">
          <p class="jamiep">Motivated software developer with 5+ years of management experience in various work environments. Always eager to learn and create new things.</p>
          <ul class="social-links">
            <li><i class="fab fa-github-square"></i><a href="https://github.com/jamiemullins1"></a></li>
            <li><i class="fab fa-linkedin"></i><a href="www.linkedin.com/in/jamie-mullins"></a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dict from '../services/words_dictionary.json'

export default {
  name: 'Home',
  created(){
    console.log(dict)
  }
}
</script>

<style lang="scss" scoped>

div.homepage{
  background-color: #030B12;
  border-left: 3px solid #34A3CC;
  border-right: 3px solid #34A3CC;
  width: 75vw;
  height: auto;
  text-align: center;
}

.profile{
  display: flex;
  justify-content: center;
  justify-content: space-between;
}

.rules{
  margin: 0 150px 0 150px;
  text-align: justify;
}

div.rules>h3{
  &:hover{
    color: #ffc438;
  }
}

.jamie-pic{
  width: 250px;
  height: auto;
  border-radius: 50%;
}
.jamiep, .clayp{
  width: 15vw;
  font-size: 1rem;
  margin: 0 75px 0 75px;
  text-align: justify;
  margin-top: 20px;
}

div.profile>div{
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clay-pic{
  width: 250px;
  height: auto;
  border-radius: 50%;
}

.social-links{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-left: 0;
  //justify-content: flex-start;
}
</style>
