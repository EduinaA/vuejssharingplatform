<template>
  <div id="app">
    <div id="login">
      <form @submit="postData">
        <label>Email:</label>
        <input v-model="input.email" placeholder="username"><br>
        <label>Password</label>
        <input v-model="input.password" placeholder="password"><br>
        <button type="submit">Login</button><br>
        <button @click="logOut">Logout</button><br>
      </form>
    </div>
    <br/>
    <br/>
    <h2>What we offer</h2>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque arcu eu nisi finibus aliquam. Maecenas ut tortor accumsan, accumsan sapien quis, sagittis ligula. Curabitur ut feugiat nunc.</p>
    <p>Phasellus eget ligula vitae erat convallis dapibus. Nulla eros velit, rutrum ut odio quis, vestibulum scelerisque erat. Vivamus ut leo facilisis, lacinia enim et, pellentesque dolor. Donec porta ut purus placerat elementum. Praesent id laoreet ipsum, nec pretium lacus. Etiam malesuada enim et massa gravida hendrerit. Fusce non dui in ipsum tempor maximus vitae sed ligula. Mauris eu ex sed libero molestie faucibus. Aenean tempor eget mauris sit amet lobortis. Donec pretium, augue ut blandit ullamcorper, eros mauris commodo tellus, nec ullamcorper tortor risus at erat.</p>
  </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'login',
    data () {
      return {
        input: {
          email: '',
          password: ''
        }
      }
    },
    created () {
    },
    methods: {
      logOut () {
        this.$router.push('/create')
      },
      postData () {
        this.$http.post('http://35.187.33.136:3000/api/auth/login', this.input).then(response => {
          response.headers.get('Authorization')
          if (response.status === 200) {
            localStorage.setItem(response.headers['map']['jwt-token'][0], response.data)
            console.log(localStorage)
            if (localStorage != null) {
              this.$router.push('/dashboard')
            }
          }
          if (response.status === 500) {
            this.$router.push('/create')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
