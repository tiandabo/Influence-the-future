<template>
	<div class="banner">
		<div class="banner-div" v-if="bgColor" :style="'background:'+ bgColor+';'"> 
			<div class="context">
				<h1>{{bannerText.title}}</h1>
				<p>{{bannerText.subtitle}}</p>
				<p>{{bannerText.content}}</p>
				<img :src="imgUrl" />
			</div>
		</div>
		<img  :src="imgUrl" v-else/>
	</div>
</template>

<script>
	export default {
		props: ['bgColor','imgUrl','bannerText']
	}
</script>

<style lang="scss" scoped="scoped">
   * {
   	margin: 0;
   	padding: 0;
   }
   .banner {
   	width: 100%;
    height: 650px;
	overflow: hidden;
   	>img {
   		width: 100%;
   		height: 100%;
   	}
	.banner-div {
		width: 100%;
   		height: 100%;
		position: relative;
		text-align: center;
		.context {
			position: absolute;
			width: 100%;
			text-align: center;
			top: 80px;
			h1 {
				margin: 15px;
			}
			p {
				&:nth-child(2) {
					font-size: 30px;
					margin: 15px;
				}
			}
			img {
				position: relative;
				max-height: 560px;
				top: -120px;
			}
		}
	}
   }
</style>