<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/dashboard'">Dashboard</router-link>
    <router-link v-bind:to="'/connect'">Connect your social accounts</router-link>
    <router-link v-bind:to="'/create'">Create post</router-link>
    <router-link v-bind:to="'/social'">Social activities</router-link>
    <router-link v-bind:to="'/settings'">Profile settings</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
