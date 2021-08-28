<template>
  <div>
    <div class="homepage">
      <h1>Welcome to Scrobble</h1>
      <div>
      <h1>Gameplay</h1>
      <p>
        "rules that I will write eventually"
      </p>
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
      <p>some stuff about clay</p>
      <ul>
      <li><a href="https://github.com/claygilk">github</a></li>
      <li><a href="https://www.linkedin.com/in/clay-gilkerson/">LinkedIn</a></li>
      </ul>
      </div>
      <div>
      <h2>Jamie Mullins</h2>
      <img class="jamie-pic" src="../assets/jamiesamazingheadshot.jpg">
      <p>some stuff about jamie</p>
      <ul>
      <li><a href="https://github.com/jamiemullins1">github</a></li>
      <li><a href="www.linkedin.com/in/jamie-mullins">LinkedIn</a></li>
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
  height: 100vw;
  text-align: center;
}

.profile{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

.jamie-pic{
  width: 250px;
  height: auto;
}

.clay-pic{
  width: 250px;
  height: auto;
}
</style>
