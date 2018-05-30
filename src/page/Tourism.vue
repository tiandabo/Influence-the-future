<template>
	<div class="tourism">
		<banner imgUrl="static/test/旅行大.jpeg"></banner>
		<div class="guide">
			<div>
				<img src="static/test/旅游.png" />
				<p>VR虚拟旅游</p>
			</div>
			<div>
				<img src="static/test/07-游戏机.png" />
				<p>AR增强现实趣味游戏</p>
			</div>
			<div>
				<img src="static/test/星际城市.png" />
				<p>VR未来城市</p>
			</div>
		</div>
		<div class="screen">
			<p>VR虚拟旅行</p>
			<p>未知先行，身临其境</p>
		</div>
		<div class="tourism-case">
			<p>案例展示</p>
			<div class="tourism-list" v-for="i in tourismCase">
				<p>
					<img :src="imgUrl" v-for="imgUrl in i.imgUrl" />
				</p>
				<div class="tourism-list-content">
					{{i.content}}
				</div>
			</div>
		</div>
		<div class="screen">
			<p>AR增强现实趣味游戏</p>
			<p>时代互动，增强现实</p>
		</div>
		<div class="ar-game">
			<div class="game-image">
				<img src="static/test/tourismImg/图片26.png" />
			</div>
			<div class="ar-game-content">
				<h3>AR增强现实</h3>
				<p>
					增强现实技术，它是一种将真实世界信息和虚拟世界信息“无缝”集成的新技术，是把原本在现实世界的一定时间空间范围内很难体验到的实体信息(视觉信息,声音,味道,触觉等),通过电脑等科学技术，模拟仿真后再叠加，将虚拟的信息应用到真实世界，被人类感官所感知，从而达到超越现实的感官体验。真实的环境和虚拟的物体实时地叠加到了同一个画面或空间同时存在。 增强现实技术，不仅展现了真实世界的信息,而且将虚拟的信息同时显示出来，两种信息相互补充、叠加。在视觉化的增强现实中，用户利用头盔显示器，把真实世界与电脑图形多重合成在一起，便可以看到真实的世界围绕着它。
				</p>
			</div>
		</div>
		<div class="ar-case">
			<h1>应用案例展示</h1>
			<h2>AR游戏教学</h2>
			<div>
				<img :src="i" v-for="i in arCase" />
			</div>
		</div>
		<div class="screen">
			<p>VR未来城市</p>
			<p>未来城市，近在眼前</p>
		</div>
		<div class="vr-city">
			<div class="vr-city-content">
				<h3>未来城市</h3>
				<p>
					2016年被成为中国城市规划年。为了实现用高质量的计算机动画对现实世界进行模拟与再创造成为可能，VR城市规划无疑给人们提供了一种全新的城市规划建设理念。在VR虚拟现实当中可以看到城市规划的蓝图，人们进入到其中之后从理论到实现，可以更加轻松的发现其中的问题，从而真正解决相关的事情。所以在城市建设的过程中，真正使用这种方式之后，对整个建设的规划就会起到一个非同一般作用。
				</p>
			</div>
			<div class="vr-city-image">
				<img src="static/test/tourismImg/a3bdadc1dbe524580afc11a25403411c.jpg" />
			</div>
		</div>
	</div>
</template>
<script>
	import banner from "@/components/Banner"
	export default {
		data() {
			return {
				tourismCase: [{
						imgUrl: [
							'static/test/tourismImg/图片16.png',
							'static/test/tourismImg/图片17.png',
							'static/test/tourismImg/图片18.png'
						],
						content: '紫荆城VR是古今中外以来第一款1:1还原紫荆城（北京故宫）的场景，从具有传奇性的午门广场，到皇帝上朝的太和殿，再到演绎宫心计的东西后宫，最后到美轮美奂的御花园，紫荆城为游客提供了身临其境的游览，清朝皇帝、大臣、嫔妃、公公、侍卫、宫女全程贯穿，让游客充分了解紫荆城的前世今生……玩紫荆城VR，带你提要穿越时空的旅行！'
					},
					{
						imgUrl: [
							'static/test/tourismImg/图片19.png',
							'static/test/tourismImg/图片20.png',
							'static/test/tourismImg/图片21.png'
						],
						content: '  在VR场景里可以近距离接触到中国珍贵的文化遗产-兵马俑，您可以通过操作一睹2000多年前兵马俑最原原始的状态。'
					},
					{
						imgUrl: [
							'static/test/tourismImg/图片22.png',
							'static/test/tourismImg/图片23.png',
							'static/test/tourismImg/图片24.png'
						],
						content: '根据台湾新竹东门城实景所建构.创作之初，只是想透过3D电脑绘图技术，对周遭景物进行全方位的写生。后来接触到HTCVIVE，就尝试把场景导入，创造另一种漫游体验方式。'
					},
				],
				arCase: [
					'static/test/tourismImg/图片27.png',
					'static/test/tourismImg/图片28.png',
					'static/test/tourismImg/图片29.png',
					'static/test/tourismImg/图片25.png',
					'static/test/tourismImg/图片30.png',
				]
			}
		},
		components: {
			banner
		}
	}
</script>
<style lang="scss" scoped>
	.tourism {
		min-width: 100%;
	}
	.guide {
		width: 65%;
		margin: 30px auto;
		display: flex;
		/*flex-wrap: wrap;*/
		justify-content: space-between;
		div {
			text-align: center;
			color: #333;
			img {
				width: 100px;
				height: 100px;
			}
		}
	}
	
	.screen {
		width: 100%;
		text-align: center;
		background: #A6A6A6;
		overflow: hidden;
		padding: 50px 0;
		color: #666;
		p {
			&:first-child {
				font-size: 30px;
				font-weight: bolder;
			}
			&:last-child {
				margin: 20px;
				font-size: 20px;
			}
		}
	}
	
	.tourism-case {
		width: 70%;
		margin: 0 auto;
		>p {
			width: 140px;
			color: #264F7B;
			font-size: 30px;
			font-weight: bolder;
			border-bottom: 3px solid #264F7B;
			padding-bottom: 5px;
			margin-bottom: 30px;
		}
		.tourism-list {
			width: 100%;
			border-bottom: 3px solid #264F7B;
			&:last-child {
				border: none;
			}
			p {
				padding: 50px 0;
				width: 100%;
				display: flex;
				justify-content: center;
				img {
					width: 300px;
					height: 200px;
				}
			}
			.tourism-list-content {
				font-size: 18px;
				font-weight: bold;
				color: #666;
				text-indent: 2em;
				padding-bottom: 50px;
			}
		}
	}
	
	.ar-game,.vr-city {
		width: 65%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 100px 0;
		.game-image {
			width: 400px;
			height: 400px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.ar-game-content,.vr-city-content {
			width: 400px;
			font-size: 18px;
			letter-spacing: 0.05em;
			color: #555;
			h3 {
				text-align: center;
				margin: 30px;
			}
		}
	}
	
	.ar-case {
		color: #264F7B;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		img {
			width: 30%;
			margin: 1%;
			height: 200px;
		}
	}
	.vr-city-image {
		width: 530px;
		height: 340px;
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>