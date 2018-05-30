<template>
	<div class="camear">
		<banner imgUrl="static/test/黑晶/banner/58f2c75785864_1024.jpg"></banner>
		<div class="introduce">
			<h2>720°全景拍摄</h2>
			<p>720全景是视角超过人的正常视角的图像。顾名思义就是给人以三维立体感觉的实景360度全方位图像。全景实际上只是一种对周围景象以某种几何关系进行映射生成的平面图片，只有通过全景播放器的矫正处理才能成为三维全景（全景特指水平360度，上下360度全能观看的，能看到“天、地”的全景）。</p>
			<img src="static/test/720/d196683e2e086b8439f1dc30834f572a.jpg" />
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
				<img src="static/test/720/图片1.png" />
			</div>
		</div>
		<div class="camear-case">
			<p>应用案例展示</p>
			<div class="case1">
				<div class="case1-img">
					<img :src="i" v-for="i in case1.imgUrl" />
				</div>
				<div class="case1-text">
					<div class="case1-text-content" v-for="(i,index) in case1.content">
						<h3>{{i.title}}</h3>
						<p>{{i.text}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="camear-case">
			<p>应用案例展示</p>
			<div class="case2">
				<div class="case2-img">
					<img :src="i" v-for="i in case2" />
				</div>
				<div class="case2-text">
					<div class="case2-text-tiele">
						<span>体育赛事直播</span>
						<span>电影的制作拍摄</span>
					</div>
					<p>
						通过720度的全景摄像机对体育赛事进行直播或者电影进行拍摄和制作，使用户足不出户，在家通过网络佩戴虚拟现实眼镜来感受赛事现场的激情和身临其境的观影体验。
					</p>
				</div>
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
								imgUrl: 'static/test/720/图片2.png',
								text: '第一代消费者产品'
							},
							{
								imgUrl: 'static/test/720/图片3.png',
								text: '第一代专业级产品'
							}
						]
					},
					{
						model: [{
								imgUrl: 'static/test/720/图片4.png',
								text: '第二代消费者产品'
							},
							{
								imgUrl: 'static/test/720/图片5.png',
								text: '第二代消费者产品'
							}
						]
					},
					{
						model: [{
								imgUrl: 'static/test/720/图片6.png',
								text: '第三代消费者产品'
							},
							{
								imgUrl: 'static/test/720/图片7 拷贝.png',
								text: '第三代消费者产品'
							}
						]
					}
				],
				case1: {
					imgUrl: [
						'static/test/720/图片8.png',
						'static/test/720/图片9.png'
					],
					content: [{
							title: '新花怒放演唱会',
							text: '2015年9月，全新的新花怒放首场演唱会热烈上演，演唱会通过全新的全景摄像机，让用户足不出户就能观看到演出的全程。'
						},
						{
							title: '中韩文化节',
							text: '2015年中韩文化节，中韩明星演唱会采用了最先进的全景直播技术，让中韩人民通过互联网和虚拟现实眼镜身临其境的感受文化节的氛围。'
						},
						{
							title: 'BIGBANG郑州演唱会',
							text: '2016年3月河南影响未来电子科技有限公司使用独立研发的全景拍摄设备录制了BIGBANG郑州演唱会，并通过后期软件进行编辑制作。'
						}
					]
				},
				case2: [
						'static/test/720/图片11.png',
						'static/test/720/图片12.png',
						'static/test/720/图片13.png'
					],
				stingLength: []
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
	.camear {
		min-width: 1100px;
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
	
	.camear-case {
		width: 70%;
		margin: 0 auto;
		>p {
			color: #00A0E9;
			font-size: 18px;
			height: 18px;
			line-height: 18px;
			padding-left: 10px;
			border-left: 8px solid #00A0E9;
		}
		>div {
			margin-top: 10px;
			padding: 10px 20px;
			border-top: 1px solid #00A0E9;
			}
		.case1{
			display: flex;
			.case1-img {
				flex: 1;
				text-align: center;
				img {
					width: 450px;
					height: 270px;
				}
			}
			.case1-text {
				flex: 1;
				text-align: center;
				.case1-text-content {
					text-align: left;
					width: 300px;
					margin: 30px auto;
					h3 {
						font-size: 20px;
						width: 40px;
						white-space: nowrap;
						color: #27506E;
						margin-bottom: 20px;
						padding-bottom: 10px;
						border-bottom: 3px solid #27506E;
					}
					p {
						color: #666;
						font-size: 17px;
						text-indent: 2em;
					}
				}
			}
		}
	}
	
	.case2-img {
		display: flex;
		justify-content: center;
		img {
			width: 33%;
			height: 200px;
		}
	}
	.case2-text {
		width: 90%;
		margin: 30px auto;
		.case2-text-tiele {
			display: flex;
			justify-content: space-between;
			span {
				font-size: 30px;
				padding: 10px;
				color: #27506E;
				border-bottom: 5px solid #27506E;
			}
		}
		p {
			font-weight: bolder;
			margin: 30px 0;
			color: #333;
		}
	}
</style>