<template>
  <div>
    <div class="homepage">
      <h1>Welcome to Scrobble</h1>
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
