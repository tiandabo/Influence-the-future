<template>
	<div class="party">
		<banner imgUrl="static/test/partyBuilding/图片1.gif"></banner>
		<div class="corridor">
			<img src="static/test/partyBuilding/图片8.png" />
			<div class="corridor-case">
				<div class="container">
					<div class="title">
						<p>红色党建历史长廊</p>
						<p>郑州市</p>
					</div>
					<p class="text">建设红色文化学习走廊，并对其中的六福油画上的情景的增强现实（AR）复原。通过手机臊面油画，即可出现AR场景。</p>
					<p class="text"> 用户扫描完该油画后出现： 水面上满载起伟人以及历史事件活动起来。并且配有语音、视频等多方面介绍</p>
					<div class="container-image">
						<img :src="i" alt="" v-for="i in corridor" />
					</div>
					<div class="ar-show">
						<p>增强现实（AR）复原效果展示</p>
						<img src="static/test/partyBuilding/图片6.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="learning" style="background: url(static/test/partyBuilding/图片16.png) no-repeat;background-size: 100% 100%;">
			<h1>党建学习资料</h1>
			<div class="learning-content">
				<div>
					<p>扫描后手机上出现播放视频按钮，点击播放与一次会议相关的视频。视频可以以半透明方式展现，贴合在油画之上。</p>
					<img src="../../static/test/partyBuilding/图片17.png" class="ar-img" />
				</div>
				<div>
					<p>以界面UI形式呈现，点击按钮之后，出现详细的文字、图片和配音介绍。</p>
					<p>文字由上到下依次出现，或者点击人物，出现人物与环境的详细介绍。</p>
					<div>
						<img :src="i" v-for="i in learning" />
					</div>
				</div>
			</div>
		</div>
		<div class="party-case">
			<h1>往期案例</h1>
			<div class="case-list" v-for="i in partyCase">
				<div class="case-image">
					<img :src="image" v-for="image in i.imgUrl" />
				</div>
				<p>{{i.text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import banner from '@/components/Banner'
	export default {
		name: 'party',
		data() {
			return {
				corridor: [
					'static/test/partyBuilding/图片4.png',
					'static/test/partyBuilding/图片5.png'
				],
				learning: [
					'static/test/partyBuilding/图片9.png',
					'static/test/partyBuilding/图片10.png',
					'static/test/partyBuilding/图片11.png',
					'static/test/partyBuilding/图片12.png',
				],
				partyCase: [{
						imgUrl: [
							'static/test/partyBuilding/图片18.png',
							'static/test/partyBuilding/图片19.png',
							'static/test/partyBuilding/图片20.png',
							'static/test/partyBuilding/图片21.png'
						],
						text: '案例: 利用红军过雪山场景的体验的互动，重走长征路。'
					},
					{
						imgUrl: [
							'static/test/partyBuilding/图片22.png',
							'static/test/partyBuilding/图片23.png'
						],
						text: '案例: 在佩戴设备后，学员可以在虚拟现实场景中，与敌人战斗或是学习知识，体验红军前辈们艰苦卓绝的战役'
					},
					{
						imgUrl: [
							'static/test/partyBuilding/赤水河1.png',
							'static/test/partyBuilding/赤水河2.png',
							'static/test/partyBuilding/赤水河3.png'
						],
						judge: true,
						text: '案例: 虚拟现实四渡赤水河，高度还原当时战争场景'
					},
				]
			}
		},
		components: {
			banner
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.party {
		min-width: 1100px;
	}
	
	.corridor {
		width: 100%;
		position: relative;
		img {
			width: 100%;
		}
		.corridor-case {
			width: 100%;
			/*height: 100%;*/
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	
	.title {
		width: 160px;
		text-align: center;
		margin: 0 auto;
		p {
			/*width: 160px;*/
			color: #C00000;
			font-size: 20px;
			font-weight: bold;
			padding: 5px 0;
			&:first-child {
				border-bottom: 4px solid #E3BB4B;
			}
		}
	}
	
	.container {
		width: 65%;
		p {
			text-align: center;
		}
	}
	
	.container-image {
		display: flex;
		justify-content: space-between;
		margin: 30px 0;
		img {
			width: 500px;
			height: 260px;
		}
	}
	
	.ar-show {
		margin-top: 50px;
		text-align: center;
		img {
			margin-top: 10px;
			width: 500px;
			height: 280px;
		}
	}
	
	.learning {
		width: 100%;
		padding: 50px 0;
		text-align: center;
		color: #C00000;
		.learning-content {
			display: flex;
			justify-content: space-around;
			margin: 50px 0;
			div {
				width: 500px;
				.ar-img {
					margin: 30px;
				}
			}
		}
		p {
			text-align: left;
			text-indent: 2em;
		}
	}
	
	.party-case {
		padding: 30px 0;
		text-align: center;
		color: #999;
		font-size: 18px;
		font-weight: bolder;
		.case-list {
			width: 70%;
			padding: 30px 0;
			border-bottom: 3px solid #c000000;
			border-top: 3px solid #c00000;
			margin: 30px auto;
			&:last-child {
				.case-image {
					flex-wrap: nowrap;
				}
			}
			.case-image {
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				img {
					width: 500px;
					height: 300px;
					margin-bottom: 30px;
				}
			}
		}
	}
</style>