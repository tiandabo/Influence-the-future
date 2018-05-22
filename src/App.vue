<template>
	<div id="app">
		<Headers></Headers>
		<!--<img src="./assets/logo.png">-->
		<router-view/>
		<div v-if="scrolls>100" class="backTop" @mousemove="move" @mouseout="leave">
			<a href="javaScript:scroll(0,0)">
				<img src="../static/test/返回顶部.png"/>
			</a>
		</div>

		<Footers></Footers>
	</div>
</template>

<script>
	import Headers from "@/components/Headers";
	import Footers from "@/components/Footers"
	export default {
		name: 'App',
		data() {
			return {
				scrolls: '',
				hovers: true
			}
		},
		mounted() {
			//	document.body.scrollTop=100;
			window.addEventListener("scroll", this.scroller)
			//	console.log(this.scroll)
			//	console.log(document.documentElement.scrollTop)
			//	console.log(document.body.scrollTop)
		},
		methods: {
			scroller(e) {
				this.scrolls = document.documentElement.scrollTop || document.body.scrollTop
			},
			move() {
				this.hovers=false;
			},
			leave() {
				this.hovers=true;
			}
		},
		components: {
			Headers,
			Footers
		},
		watch: {

		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.backTop {
		position: fixed;
		right: 50px;
		bottom: 100px;
		width: 50px;
		height: 50px;
		background: #A8A8A8;
		text-align: center;
		/*line-height: 50px;*/
		img {
			width: 90%;
			height: 90%;
		}
		/*padding: 10px;*/
	}
</style>