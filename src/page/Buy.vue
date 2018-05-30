<template>
	<div class="buy">
		<Banner imgUrl="static/test/buy+/图片1.png"></Banner>
		<div class="buyIntroduce">
			<img src="static/test/buy+/图片1.png" />
			<div>
				<h2>Buy+</h2>
				<p>Buy+是阿里巴巴于2016年4月推出的额全新购物方式，使用VirtualReality（虚拟现实）技术，利用计算机图形系统和辅助传感器，生成可交互的三维购物环境。</p>
				<p>Buy+利用TMC三维动作捕捉消费者的动作并触发虚拟环境的反馈，最终实现虚拟现实中的互动。简单来说，你可以直接与虚拟世界中的人和物进行交互。甚至将现实中的场景虚拟化，成为一个可以互动的商品</p>
				<p>Buy+的购物方式分为两种，分别是VR模式和全景模式。</p>
				<p>VR模式写，用户则需要通过视线聚焦方式进入商店或者了解商品信息。值得一提的是付款方式，当用户结算时，将通过支付宝VR Pay收银台进行支付，可免密支付或通过视线聚焦相应数字进行密码支付。</p>
			</div>
		</div>
		<div class="buyIntroduce">
			<div class="left-gif">
				<div>
					<img src="static/test/buy+/a50f4bfbfbedab644741dde8fc36afc379311ee2.jpg" />
					<p>VR Buy+配合HTC手柄</p>
				</div>
				<div>
					<img src="static/test/buy+/79f0f736afc3793143351601e0c4b74543a911bc.jpg" />
					<p style="margin-bottom: 0;">AR Buy</p>
				</div>
			</div>
			<div>
				<h2>AR Buy+ 购物新体验</h2>
				<p>一六年淘宝在造物节上推出了VR Buy+，使用HTCVive作为整套购物系统的平台配合HTC的手柄，配合HTC的手柄，消费者可以拿起3D商品进行全方面的查看，并且可以更换颜色和大小，给人一种身临其境的购物体验。</p>
				<p> 在一七年八月份，淘宝对购物体验再一次做出了升级，把VR BUY+升级为了AR BUY+,那么VR跟AR有什么不同呢？VR是虚拟现实，而AR是增强现实，VR BUY+是让你在一个虚拟的环境里购物，而AR BUY+是能在真实环境的基础上添加虚拟场景或物品，让消费者能够借助这项技术获得更好的购物体验和做出更符合真实需求的消费决策。</p>
				<p>另外，淘宝AR BUY+还能通过手机AR扫描商品来查看商品的评价、销量和价格对比等等。它还能在你买鞋子的时候帮你计算出你的脚需要穿什么号码的，只要你将身份证反面朝上放置在平坦的地面上，然后光脚与身份证平行，手机摄像头会捕捉两者的信息，通过身份证的固定长宽和你的脚的比例来计算出你的脚有多大，该穿什么号码。这个功能是淘宝商品详情页的一个小工具。而这个小工具的主要入口就藏在宝贝详情页中的“颜色尺码”和“产品参数”两个菜单中间，另外一个入口则位于商家装修的尺码套装页中。</p>
			</div>
		</div>
		<div class="buy-case">
			<p>Buy+实例</p>
			<div>
				<img :src="i" v-for="i in buyCase" />
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	export default {
		name: 'buy',
		data() {
			return {
				buyCase: [
					'static/test/buy+/559653f143750192cf7305f46dc14b8d.jpg',
					'static/test/buy+/ae4b6622934fa4a44f88c1389f02e394.jpg',
					'static/test/buy+/adf3126c40b1e51199652cf42a5b0f0f.jpg'
				]
			}
		},
		components: {
			Banner
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.buy {
		min-width: 1100px;
		background: #E9E9E9;
		overflow: hidden;
	}
	
	.buyIntroduce {
		width: 65%;
		display: flex;
		justify-content: space-around;
		margin: 0px auto;
		align-items: center;
		border-bottom: 5px solid #004080;
		padding: 50px 0;
		>img {
			width: 500px;
		}
		>div {
			width: 400px;
			color: #666;
			h2 {
				margin-bottom: 30px;
			}
			&:last-child {
				p {
					text-indent: 2em;
				}
			}
		}
	}
	
	.left-gif {
		/*padding-top: 50px;*/
		img {
			width: 400px;
		}
		p {
			text-indent: 0em;
			text-decoration: underline;
			margin: 10px 0 30px 0;
		}
	}
	.buy-case {
		width: 65%;
		margin: 0 auto;
		p {
			color: #00A0E9;
			border-left: 8px solid #00A0E9;
			height: 18px;
			line-height: 18px;
			padding-left: 10px;
			margin: 30px 10px 10px 10px;
		}
		div {
			padding: 10px 0;
			border-top: 1px solid #ccc;
			width: 100%;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			img {
				height: 300px;
				margin: 10px;
			}
			
		}
	}
</style>