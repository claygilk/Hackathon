<template>
  <div>
    
    <div id="nav">
      <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
      <router-link :to="{ name: 'Home'}">Homepage</router-link>
      <router-link :to="{ name: 'Play'}">Play</router-link>
      <router-link :to="{ name: 'Scoreboard'}">Scoreboard</router-link> 
    </div>
    <router-view id="view"/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#nav{
  background: #202a25;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
  width: 100vw;
}


a{
  text-decoration: none;
  &:hover{
    color: #ffc438
  }
  &:visited{
    color: white;
  }

}



</style>
