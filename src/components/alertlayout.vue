<template>  
  <div class="alertlayout" v-if="timePassSuccess" transition="expand">
    <h2>Alert for (sec) days</h2>  
  </div>
</template>
<style>
	.alertlayout {
		height: 500px;
		width: 500px;
		background: red;
	}
</style>
<script type="text/babel">
  	export default {
    	name: 'alertlayout'
  	}
</script>
