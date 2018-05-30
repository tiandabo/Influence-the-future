<template>
	<div class="introduce">
		<banner imgUrl="static/test/黑晶/banner/b79c99f8f7a514bbb498cdaadf3188fd.jpg"></banner>
		<div class="business">
			<div class="business-content">
				<h3>企业简介</h3>
				<p>影响未来电子科技集团成立于2015年9月。 公司下属视觉项目事业群、智慧教育事业群、新能源事业群、商业地产事业群、蜘蛛网计划事业群。
				</p>
				<p>视觉项目群主要负责3D技术，全息投影，虚拟现实技术（VR），增强现实技术（AR），混合现实技术（MR）。视觉项目群拥有专业实验室2个，和美国斯坦福大学著名的虚拟互动实验室签订虚拟现实技术共享合作协议，高端技术引进使得公司拥有国内最先进的虚拟现实技术。</p>
				<p>公司现已经发展为一家拥有百名员工，拥有国内最先进虚拟现实技术的科技公司。在北京、深圳、成都、洛阳、郑州、美国拉斯维加斯设有分部，海外业务覆盖印度、越南、新加坡、乌克兰、德国的地产和重型机械等领域</p>
			</div>
			<div>
				<img src="static/test/team/company.jpg" />
			</div>
		</div>
		<div class="business">
			<div>
				<img src="static/test/team/company.jpg" />
			</div>
			<div class="business-content">
				<h3>业务范围</h3>
				<p>公司业务主要包括全景拍摄内容，虚拟现实空间应用搭建,硬件软件设备研发，VR教育培训。其中全景拍摄内容可应用市场有旅游景点体验式宣传片，电影赛事直播，
					演唱会直播，网络直播，视频通讯，同时还可应用于房产网上的实景开房体验等。虚拟现实空间的数字空间，配合虚拟现实头盔给受众营造虚拟的空间体验，同时配合交互程序，
					增强用户的体验。可应用市场有地产公司的虚拟样板间，军事实战模拟，游戏，医疗保健，教育教学，比如军事培训模拟，医学、机械、历史、地理等学生课堂教学模拟，昂贵设备教学。
					全景看房系统是利用网络的轻量推广，用全景摄像机配合应用，可实现拍摄的全景照片实时上传通过对应APP制作发布轻量的全景看房体验，用户通过移动端拖拽屏幕和VR模拟体验来体验图片式全景看房体验。
					主要用于二手房出租、出售。地产开发公司实体样板间的户型推广
				</p>
				<!--<p>视觉项目群主要负责3D技术，全息投影，虚拟现实技术（VR），增强现实技术（AR），混合现实技术（MR）。视觉项目群拥有专业实验室2个，和美国斯坦福大学著名的虚拟互动实验室签订虚拟现实技术共享合作协议，高端技术引进使得公司拥有国内最先进的虚拟现实技术。</p>
				<p>公司现已经发展为一家拥有百名员工，拥有国内最先进虚拟现实技术的科技公司。在北京、深圳、成都、洛阳、郑州、美国拉斯维加斯设有分部，海外业务覆盖印度、越南、新加坡、乌克兰、德国的地产和重型机械等领域</p>-->
			</div>
		</div>
		<div class="team">
			<div>
				<img src="static/test/team/ABUIABACGAAgtanKzwUowPTDRjDZCTiwBQ.jpg" />
			</div>
			<div>
				<img src="static/test/team/ABUIABACGAAgq6nKzwUour6RvwQw1Ak4oAU.jpg" />
			</div>
		</div>
		<div class="contact">
			<h1>联系我们</h1>
			<div class="contact-list">
				<div v-for="i in contact">
					<div class="contact-image">
						<img :src="i.imgUrl" alt="" />
					</div>
					<p>{{i.text}}</p>
				</div>
			</div>
		</div>
		<echart></echart>
	</div>
</template>
<script>
	import banner from "@/components/Banner";
	import echart from '@/page/Echart'
	export default {
		name: "introduce",
		data() {
			return {
				contact: [{
						imgUrl: 'static/test/introduce/未标题-1 拷贝.png',
						text: '座机：0371-58686806'
					},
					{
						imgUrl: 'static/test/introduce/位置.png',
						text: '联系地址：郑州市紫荆山南路666号黄科学院大学科技园区'
					},
					{
						imgUrl: 'static/test/introduce/邮箱 (1).png',
						text: '邮箱：ceo@imfutrue.xyz'
					}
				],
				team: {
					core: [{
						imgUrl: '',
						name: ''
					}]
				}
			}
		},
		components: {
			banner,
			echart
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.introduce {
		min-width: 1100px;
	}
	.business {
		width: 70%;
		margin: 100px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.business-content {
			width: 50%;
		}
		h3 {
			/*text-align: center;*/
			margin-bottom: 30px;
		}
		/*p {
			font-size: 20px;
			margin-bottom: 50px;
		}*/
	}
	
	.contact {
		width: 70%;
		margin: 50px auto;
		h1 {
			margin: 30px;
			text-align: center;
		}
		.contact-list {
			display: flex;
			justify-content: space-between;
			>div {
				width: 200px;
				.contact-image {
					border: 1px solid #aaa;
					margin: 20px auto;
					width: 80px;
					height: 80px;
					line-height: 100px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 50px;
						/*height: 90px;*/
					}
				}
			}
		}
	}
	
	.team {
		width: 100%;
		background: #E9E9E9;
		overflow: hidden;
		text-align: center;
		>div {
			margin: 30px;
		}
	}
	
	.img {
		margin-left: 35%;
	}
</style>