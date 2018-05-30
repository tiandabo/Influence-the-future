<template>
	<div class="echarts">
		<div class="myChart"></div>
	</div>
</template>

<script>
	import chart from '@/echart/echart.js';
	export default {
		mounted() {
			chart.myChart()
		}
	}
</script>

<style lang="scss" scoped="scoped" >
	.myChart {
		min-width: 1100px;
	}
</style>