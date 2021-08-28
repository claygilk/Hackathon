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
      <h2>Jamie Mullins</h2>
      <img class="jamie-pic" src="../assets/jamiesamazingheadshot.jpg">
      <h2>Clay Gilkerson</h2>
      <img class="clay-pic" src="../assets/claysamazingheadshot.jpg">
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

.jamie-pic{
  width: 250px;
  height: auto;
}

.clay-pic{
  width: 250px;
  height: auto;
}
</style>
