<template>
  <div>
    <div class="homepage">
      <h1>Welcome to Scrobble</h1>
      <div>
        <h1 class="gameplay">Gameplay</h1>
        <div class="rules">
          <h3>The objective of Scrobble is to spell as many words as you can. Each letter tile has a point value assigned to it, like in Scrabble. The more words you spell, the more points you earn.</h3>
          <h3>To spell a word, click-and-drag a letter tile from your hand to a square on the board. You can only place a tile on an empty square that is vertically or horizontally adjacent to an already placed letter tile. When you start the game, 5 random letter tiles will be placed on the board to get you started.</h3>
          <h3>There are some restrictions with spelling words: You can only spell words from left-to-right, or top-to-bottom. The minimum length for a word is 3 letters. When you are done spelling a word, press the "Done" button. If the word is valid you will earn points. If the word is invalid it will be removed from the board.</h3>
          <h3>If you get stuck, and can't spell anymore words you can click the "Get New Hand" button, to return your tiles to the deck and draw 10 more random tiles. Drawing a new hand consume a life, and you only get 3 lives per game. When you run out of lives you can no longer refresh you hand.</h3>
          <h3>When you think you can no longer spell anymore words, press the "Give Up" button. This will end the game and prompt you to enter your initals for a chance to make it onto the leaderboards.</h3>
        </div>
        <div class="dev">
          <h1 class="development">
            Development
          </h1>
          <h3>
            The front end consists of a Vue.js (v3.x) application, using Vuex for state managment. Axios was used to make API calls to the back end. We decided not to use a CSS framework in order to get more pratice with vanilla CSS. Navigation between pages is handled by the Vue Router.  
          </h3>
          <h3>
            Much of the internal game-logic for Scrobble is handled by the JavaScript modules in a seperate directory from the Vue components. Much of the game engine logic was devloped using TDD with the Mocha testing framework. 
          </h3>
          <h3>
            The back end consists of a REST API built with Node.js/Express that can perform read and write operations on a MongoDB database. The database is only used to keep track of high scores. This Express server was containerized with Docker and hosted on Google Cloud Run. We used Node.js, Express, and MongoDB because it was quick to set up and easy to deploy.
          </h3>
          <h3>In collaboration with <a href="https://mintbean.io/meets?sort=upcoming"><u>Mintbean</u></a></h3>
        </div>
      </div>
      <div>
      <h1 class="meet-the-engineers">
        Meet the Engineers
      </h1>
      <div class="profile">
        <div>
          <h2>Clay Gilkerson</h2>
          <img class="clay-pic" src="../assets/claysamazingheadshot.jpg">
          <p class="clayp">Clay is an aspiring developer with a passion for learning new technologies and solving interesting problems. He is experienced with C#/.NET and Vue.js, and Currently exploring Node.js and MongoDB.</p>
          <ul class="social-links">
            <li><i class="fab fa-github-square"></i><a href="https://github.com/claygilk"></a></li>
            <li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/clay-gilkerson/"></a></li>
          </ul>
        </div>
        <div>
          <h2>Jamie Mullins</h2>
          <img class="jamie-pic" src="../assets/jamiesamazingheadshot.jpg">
          <p class="jamiep">Jamie is a motivated software developer with 5+ years of management experience in various work environments. She is always eager to learn and create new things.</p>
          <ul class="social-links">
            <li><i class="fab fa-github-square"></i><a href="https://github.com/jamiemullins1"></a></li>
            <li><i class="fab fa-linkedin"></i><a href="www.linkedin.com/in/jamie-mullins"></a></li>
          </ul>
        </div>

      </div>

      </div>
      
    </div>
    <footer>

      <p>Copyright © Scrobble 2021</p>
      <!-- <div>
        <ul class="footer-links">
          <li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com"></a></li>
          <li><i class="fab fa-github-square"></i><a href="https://github.com"></a></li>
          <li><i class="fab fa-twitter"></i><a href="https://twitter.com"></a></li>
          <li><i class="fab fa-instagram-square"></i><a href="https://www.instagram.com"></a></li>
        </ul>
      </div> -->
    </footer>
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
  box-shadow:  0px 0px 4px 4px #34a3cca9;
  width: 75vw;
  height: auto;
  text-align: center;
}

.profile{
  display: flex;
  justify-content: center;
  justify-content: space-between;
}

.rules, .dev{
  margin: 0 150px 0 150px;
  text-align: justify;
}

h3{
  font-weight: normal;
  color: white;
}
div.rules>h3{
  &:hover{
    color: #ffc438;
  }
}

div.dev>h3{
  &:hover{
    color: #ffc438;
  }
}

.gameplay{
  color: #ffc438;
}

.development{
  color: #ffc438;
  text-align: center;
}

.meet-the-engineers{
  color: #ffc438;
}

.jamie-pic{
  width: 250px;
  height: auto;
  border-radius: 50%;
  //box-shadow: 0px 0px 4px 4px #ffc33863;
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
  cursor: pointer;
  //justify-content: flex-start;
}

.footer-links{
  display: flex;
  justify-content: space-between;

}
</style>
