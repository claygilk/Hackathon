<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home'}">Homepage</router-link>
      <router-link :to="{ name: 'Play'}">Play</router-link>
      <router-link :to="{ name: 'Scoreboard'}">Scoreboard</router-link> 
    </div>
    <router-view id="view"/>
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

</style>
