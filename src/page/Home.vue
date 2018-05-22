<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="i in imgUrl">
					<img :src="i" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<div class="xiang" v-for="i in trend" :style="'background:'+i.bgColor+';color:'+i.textColor+';'">
			<div class="container">
				<div class="content">
					<h1>{{i.name}}</h1>
					<div class="context">{{i.context}}</div>
					<button>了解更多</button>
				</div>
				
			</div>
			<div>
				<img :src="i.imgUrl">
			</div>
		</div>
		<!-- <div class="education">
			<div class="education-text">应用案例</div>
			<div class="education-img">
				<img src="../../static/test/vr1.jpg"/>
			</div>
		</div> -->
	</div>
</template>
<script>
	import Swiper from "swiper";
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name: "home",
		data() {
			return {
				imgUrl: [
					'../../static/test/vr0.jpg',
					'../../static/test/下载 (1).jpg',
					'../../static/test/下载.jpg'
				],
				trend: [
					{
						num: '01',
						name: 'VR教育',
						imgUrl:'../../static/test/黑晶/home/img-1.png',
						context: '校园创客空间虚拟现实解决方案，为学生打造一个自由的、动手实现创意的VR教育平台。',
						bgColor: '#F6F7F2',
						textColor: '#000'
					},
					{
						num: '02',
						name: 'VR安全',
						imgUrl:'../../static/test/黑晶/home/img-2.png',
						context: 'VR消防/地震/溺水/用电/自然灾害等安全教育模拟演练，增强学生安全意识，学习紧急应对措施。',
						bgColor: '#C0CED6',
						textColor: '#000'
					},
					{
						num: '03',
						name: 'VR高教职教',
						imgUrl:'../../static/test/黑晶/home/img-3.png',
						context: '实训教学各环节仿真模拟，辅助损耗大、危险高的传统教学，节约教学资源，提升实训效率。',
						bgColor: '#192337',
						textColor: '#fff'
					},
					{
						num: '04',
						name: 'VR军事应用解决方案',
						imgUrl:'../../static/test/黑晶/home/img-4.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#3B597A',
						textColor: '#fff'
					},
					{
						num: '04',
						name: 'VR工业应用解决方案',
						imgUrl:'../../static/test/黑晶/home/img-5.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#718A9B',
						textColor: '#fff'
					},
					{
						num: '06',
						name: 'VR医疗应用解决方案',
						imgUrl:'../../static/test/黑晶/home/img-7.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#F5E1D3',
						textColor: '#000'
					},
					{
						num: '08',
						name: 'VR地产应用解决方案',
						imgUrl:'../../static/test/黑晶/home/img-9.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#EBEAE1',
						textColor: '#000'
					},
					{
						num: '09',
						name: 'VR旅游娱乐定制化开发',
						imgUrl:'../../static/test/黑晶/home/img-10.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#0E0F24',
						textColor: '#fff'
					},
					{
						num: '09',
						name: 'AR内容解决方案',
						imgUrl:'../../static/test/黑晶/home/img-12.png',
						context: '军事理论培训/军械操作/军演模拟/作战指挥， 全面满足军事仿真训练需求，科技提升战斗力。',
						bgColor: '#D4DEEE',
						textColor: '#000'
					},
				]
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				autoplay: 2000,
				loop: true,
				pagination: '.swiper-pagination',
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.swiper-container {
		width: 100%;
		height: 650px;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.xiang {
		width: 100%;
		display: flex;
		text-align: center;
		>div {
			flex: 1;
			display: inline;
			text-align: center
		}
		.container {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
		.content {
			width: 400px;
			text-align: left;
			.context {
				margin: 30px 0;
			}
			button {
				padding: 10px;
				background: #E10415;
				color: #fff;
				font-size: 16px;
				border: none;
				border-radius: 5px;
			}
		}
		img {
			max-width: 650px;
		}
	}
	.education {
		width: 100%;
		height: 600px;
		border-bottom: 1px solid #999;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.education-text {
			height: 205px;
		}
		.education-img {
			width: 760px;
			height: 590px;
			background: #A1AC9B;
		}
	}
	.swiper-pagination-bullet {
		background: #fff !important;
	}
</style>