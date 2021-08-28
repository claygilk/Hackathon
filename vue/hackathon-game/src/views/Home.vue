<template>
  <div>
    <div class="homepage">
      <h1>Welcome to Scrobble</h1>
      <h1>Gameplay</h1>
      <p>
        "rules that I will write eventually"
      </p>
      <h2>
        Development
      </h2>
      <p>
        "what we used to make the game"
      </p>
      <h3>
        Meet the Engineers
      </h3>
      <!-- <img class="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4D03AQG8YbQrpIa-CQ/profile-displayphoto-shrink_800_800/0/1622582128244?e=1635379200&v=beta&t=BTm-VVJ2rQLROtofZOkNKQVUsFmd-nk4kB0-KuYQzuw"> -->
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
</style>
