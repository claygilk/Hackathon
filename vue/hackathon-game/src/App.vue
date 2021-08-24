<template>
  <div id="nav">
    <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
    <router-link :to="{ name: 'Home'}">Homepage</router-link> |
    <router-link :to="{ name: 'Play'}">Play</router-link> |
    <router-link :to="{ name: 'Scoreboard'}">Scoreboard</router-link> |
  </div>
  <router-view/>
</template>

<style lang="scss">

</style>
