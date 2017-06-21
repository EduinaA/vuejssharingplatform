<template>
  <div id="create">
    <h1>CREATE POST</h1>
    <br/>    
    <form @submit="postData">
      <label>Title</label><br/>
      <input v-model="title" placeholder="Insert Title"><br/>
      <label>Description</label><br/>
      <textarea v-model="description" placeholder="Add Description"></textarea><br/>
      <label>Smaller Description</label><br/>
      <textarea v-model="smallDescription" placeholder="Add Smaller Description"></textarea><br/>
      <label>Image</label><br/>
      <div>
        <div v-if="!image">
          <h2>Select an image</h2>
          <input type="file" @change="onFileChange">
        </div>
        <div v-else>
          <img :src="image" />
          <button @click="removeImage">Remove image</button>
        </div>
      </div><br/>
      <social-sharing url="https://vuejs.org/" inline-template>
        <div>
          <network network="facebook">
            <button>Share on FB</button><br/>
          </network>          
          <network network="twitter">
            <button>Share on Twitter</button><br/>
          </network>          
        </div>
      </social-sharing><br/>
      <button>submit</button><br/>
    </form>
    <br/>
    <br/>
    <button>Scheduling Options</button><br/>
    <button>Calendar</button><br/>
    <calendar-range :events="calendarEvents" :selection="calendarSelection"></calendar-range>
    <button>Reshare again at:</button><br/>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'create',
  data: {
    image: ''
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>
<!-- styling for the component -->
<style>
#create {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    width: 30%;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
}
</style>
