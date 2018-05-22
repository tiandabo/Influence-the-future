<template>
	<div class="camear">
		<banner imgUrl="../../static/test/黑晶/banner/58f2c75785864_1024.jpg"></banner>
		<div class="introduce">
			<h2>720°全景拍摄</h2>
			<p>720全景是视角超过人的正常视角的图像。顾名思义就是给人以三维立体感觉的实景360度全方位图像。全景实际上只是一种对周围景象以某种几何关系进行映射生成的平面图片，只有通过全景播放器的矫正处理才能成为三维全景（全景特指水平360度，上下360度全能观看的，能看到“天、地”的全景）。</p>
			<img src="../../static/test/720/d196683e2e086b8439f1dc30834f572a.jpg" />
		</div>
		<div class="amear-image">
			<h1>720°全景摄像头</h1>
			<div class="edition" v-for="i in editions">
				<div v-for="num in i.model">
					<img :src="num.imgUrl" />
					<p>
						{{num.text}}
					</p>
				</div>
			</div>
		</div>
		<div class="field">
			<p>应用领域</p>
			<div>
				<img src="../../static/test/720/图片1.png" />
			</div>

		</div>
	</div>
</template>

<script>
	import banner from "@/components/Banner";
	export default {
		name: 'camera',
		data() {
			return {
				editions: [{
						model: [{
								imgUrl: '../../static/test/720/图片2.png',
								text: '第一代消费者产品'
							},
							{
								imgUrl: '../../static/test/720/图片3.png',
								text: '第一代专业级产品'
							}
						]
					},
					{
						model: [{
								imgUrl: '../../static/test/720/图片4.png',
								text: '第二代消费者产品'
							},
							{
								imgUrl: '../../static/test/720/图片5.png',
								text: '第二代消费者产品'
							}
						]
					},
					{
						model: [{
								imgUrl: '../../static/test/720/图片6.png',
								text: '第三代消费者产品'
							},
							{
								imgUrl: '../../static/test/720/图片7 拷贝.png',
								text: '第三代消费者产品'
							}
						]
					}
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
	
	.introduce {
		width: 80%;
		margin: 0 auto;
		text-align: center;
		color: #333;
		h2 {
			margin: 30px;
		}
		p {
			margin: 30px;
		}
		img {
			width: 100%;
			max-width: 1000px;
			min-width: 600px;
		}
	}
	
	.amear-image {
		background: #EEEEEE;
		text-align: center;
		margin: 30px 0;
		h1 {
			padding: 30px;
		}
	}
	
	.edition {
		display: flex;
		width: 60%;
		margin: 0 auto;
		padding: 50px 0;
		justify-content: space-between;
		img {
			width: 300px;
			height: 300px;
			text-align: center;
			margin: 30px;
		}
	}
	
	.field {
		width: 70%;
		margin: 0 auto;
		p {
			font-size: 30px;
			font-weight: bolder;
			color: #264F6D;
			width: 120px;
			border-bottom: 3px solid #264F6D;
		}
		div {
			width: 100%;
			text-align: center;
			img {
				margin: 30px auto;
			}
		}
	}
</style>