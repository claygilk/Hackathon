<template>
<div class="main-view">
  <div class="scoreboard">
    <h1>Leaderboards</h1>
    <Scores/>
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
import Scores from '../components/Scores.vue'

export default {
  components: {
    Scores
  }
}
</script>

<style lang="scss">

div.main-view{
  // height: 1238px !important;
  block-size: fit-content;
}

h1{
  font-family: 'VT323', monospace;
  font-size: 2.5em;
  font-weight: normal;
  color: white;
}

div.scoreboard{
  background-color: #030B12;
  box-shadow:  0px 0px 4px 4px #34a3cca9;
  width: 75vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

</style>