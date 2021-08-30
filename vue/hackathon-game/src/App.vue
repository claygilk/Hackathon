<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home'}">Homepage</router-link>
      <router-link :to="{ name: 'Play'}">Play</router-link>
      <router-link :to="{ name: 'Scoreboard'}">Scoreboard</router-link> 
    </div>
    <router-view id="view"/>

    <footer class="footer">
      <ul class="footer-credits">
        <li class="footer-txt">
          <div>
            <span class="footer-txt">In collaboration with  </span>
            <a href="https://mintbean.io/meets?sort=upcoming">
              <img class="mintbean-logo" src="./assets/mintbean.png">
              <u>Mintbean</u>
            </a>
          </div>
        </li>
        <li class="footer-txt">
          <div>
            <span>Copyright © Scrobble 2021</span>
          </div>
        </li>
      </ul>

        <ul class="footer-links">
          <li class="footer-txt"><a href="https://pensive-minsky-873ba7.netlify.app/">
            <i class="fas fa-gamepad"></i> </a> Play Now
          </li>
          <li class="footer-txt"><a href="https://github.com/claygilk/Hackathon">
            <i class="fab fa-github-square"></i> </a> Source Code
          </li>
          <li class="footer-txt">
            <a href="https://twitter.com">
              <i class="fab fa-twitter">
              </i> 
            </a> Twitter
          </li>
          <li class="footer-txt"><a href="https://www.instagram.com">
            <i class="fab fa-instagram-square"></i> </a> Instagram
          </li>
        </ul>

    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

*{
  font-family: 'VT323', monospace;
}

#nav{
  background: #34A3CC;
  color: white !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 75px;
  font-family: 'VT323', monospace;
  font-size: 2em;

  display: flex;
  flex-flow: row warp;
  justify-content: space-around;
  align-items: center;
}

#view{
  margin-top: 75px;
  width: 100%;
  height: auto;
  background-size: 100%;
  background-repeat: repeat-y;
  background-image: url("./assets/arcadepattern.png");
  z-index: -1;
    display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // box-shadow:  inset 0px 0px 4px 4px #34a3cca9;
}

a{
  text-decoration: none;
  color: white;
  &:visited{
    color: white;
  }
}

a:hover{
  color: #ffc438
}

body { 
  margin: 0 !important; 
}

.footer-links{
  display: flex;
  justify-content: space-evenly;
  font-size: 1em;
  margin-bottom: 0;
}
.footer-credits {
  margin-top: 0;
  display: flex;
  justify-content: space-around;
}

.mintbean-logo{
  height: 20px;
  margin-right: 0.5em;
}

.footer{
  background-color: #33a3cc;
}
.footer-txt{
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1em;
  color: white;

  &:hover{
    color: #ffc438;
  }
}

a > i {
  margin-right: 0.5em;
}

ul{
  padding-left: 0
}

</style>
