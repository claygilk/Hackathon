<template>
  <div>
    <div id="nav">
      <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
      <router-link :to="{ name: 'Home'}">Homepage</router-link> |
      <router-link :to="{ name: 'Play'}">Play</router-link> |
      <router-link :to="{ name: 'Scoreboard'}">Scoreboard</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#nav{
  background: #202a25;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  margin-bottom: 75px;
}

a:visited{
  color: white;
}

</style>
