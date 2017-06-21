<template>
  <div id="connect">
    <h1>CONNECT PAGE</h1>
    <br/>
    <form @submit="created">
      <label>Connect to your Facebook page</label>
      <br/>
      <input v-model="input.url" placeholder="Input link"><br>
      <button type="submit">Connect</button><br>
    </form>
    <br/>
    <form @submit="created">
      <label>Connect to your Twitter page</label>
      <br/>
      <input v-model="input.url" placeholder="Input link"><br>
      <button type="submit">Connect</button><br>
    </form>
    <br/>
    <p>And more Comming soon....</p>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'connect',
  data () {
    return {
      input: {
        url: ''
      }
    }
  },
  methods: {
  }
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
