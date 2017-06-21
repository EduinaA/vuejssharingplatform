<template>
  	<div id="dashboard">
 		<h1>MAIN DASHBOARD</h1>
 		<div>Business Account Name</div>
 		<p>Pellentesque quis semper sapien. Suspendisse quis odio varius, hendrerit ex eu, sollicitudin risus. Aenean at enim turpis. Maecenas hendrerit, justo molestie luctus consectetur, ex nibh vehicula orci, in rhoncus nunc quam sit amet mi. Quisque at vestibulum dui. In sit amet lobortis elit, eget iaculis dolor. Praesent efficitur tortor sem, imperdiet semper elit porta eget.</p>
 		<vue-chart
    	:chart-type="chartType"
    	:columns="columns"
    	:rows="rows"
    	:options="options"
		></vue-chart>
 	</div>
</template>

<script type="text/babel">
  export default {
    name: 'dashboard',
    data () {
      return {
        columns: [{
          'type': 'string',
          'label': 'Year'
        }, {
          'type': 'number',
          'label': 'Games Played'
        }, {
          'type': 'number',
          'label': 'Users'
        }],
        rows: [
          ['2004', 1000, 400],
          ['2005', 1170, 460],
          ['2006', 660, 1120],
          ['2007', 1030, 540]
        ],
        options: {
          title: 'Test Graph',
          hAxis: {
            title: 'Year',
            minValue: '2004',
            maxValue: '2007'
          },
          vAxis: {
            title: '',
            minValue: 300,
            maxValue: 1200
          },
          width: 900,
          height: 500,
          curveType: 'function'
        }
      }
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
