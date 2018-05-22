<template>
	<div class="head">
		<div class="logo" @click="refresh" @mouseover="over" @mouseout="outs">
			<img src="../../static/test/logo.png" />
			<div class="arrow">
				<svg width="100%" height="100%" class="arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
					<polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgba(255,255,255,.5);stroke-width:2" />
				</svg>
			</div>
			<div class="triangle" v-if="secondMenu">
			</div>
			<div v-if="secondMenu" class="second">
				<p class="trans"></p>
				<p v-for="(i,index) in classify" v-if="index > 0">
					<router-link :to="i.jump">{{i.name}}</router-link>
				</p>
			</div>
		</div>
		<div class="right">
			<div v-for="i in classify" :key="i.name" @mousemove="hovers" class="classify">
				<span :title="i.name" class="span"><router-link :to="i.jump">{{i.name}}</router-link></span>
				<div v-if="i.child" class="child">
					<router-link :title="child.name" v-for="child in i.child" :key="child.name" :to="child.jump">{{child.name}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// window.onresize = function(){
	// 	alert(1)
	// }
	export default {

		name: 'Headers',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				classify: [{
						name: '首页',
						jump: "/"
					},
					{
						name: 'VR教育',
						jump: "/classroom",
						child: [{
								name: "教室",
								jump: "/classroom"
							},
							{
								name: "创客",
								jump: "/"
							},
							{
								name: "教育",
								jump: "/"
							},
							{
								name: "实训室",
								jump: "/"
							}
						]
					},
					{
						name: 'VR培训',
						jump: "/",
						child: [{
								name: "军事应用",
								jump: "/"
							},
							{
								name: "工业应用",
								jump: "/"
							},
							{
								name: "公安武警",
								jump: "/"
							},
							{
								name: "医疗应用",
								jump: "/"
							}
						]
					},
					{
						name: '全景摄像头',
						jump: "/camera"
					},
					{
						name: 'VR智慧旅游',
						jump: "/tourism"
					},
					{
						name: 'VR地产',
						jump: "/estate"
					},
					{
						name: '新闻',
						jump: "/"
					},
					{
						name: '关于我们',
						jump: '/introduce',
						child: [{
								name: "公司介绍",
								jump: "/introduce"
							},
							{
								name: "人才招聘",
								jump: "/recruit"
							},

						]
					}

				],
				windowWidth: window.outerWidth,
				secondMenu: false
			}
		},
		mounted() {
			const that = this
			window.onresize = () => {
				return(() => {
					window.screenWidth = window.outerWidth
					that.windowWidth = window.screenWidth
				})()
			}
		},
		methods: {
			hovers() {
				$(".classify").hover(function() {
					$(this).children(".child").stop().slideDown()
				}, function() {
					$(this).children(".child").stop().slideUp()
				})
			},
			refresh() {
				console.log(this.$route)
				//				if(this.$route.path=="/") {
				////					console.log(this.$route)
				//					 window.location.reload();
				//				}else {
				//					this.$router.push("/")
				//				}
			},
			over() {
				// console.log(111)
				this.secondMenu = true;
//				$(".arrow").animate({transform:'rotate(270deg)'},200)
//				$(".arrow").css({'transform':'rotate(270deg)'})
			},
			outs() {
				this.secondMenu = false;
//				$(".arrow").animate({transform:'rotate(180deg)'},200)
//				$(".arrow").css({'transform':'rotate(180deg)'})
			},
			windowChange() {
				window.onresize = function() {
					if(window.outerWidth > 1200) {
						alert(1)
					}

				}
			}

		},
		watch: {
			windowWidth(val) {
				if(!this.timer) {
					this.windowWidth = val
					this.timer = true
					let that = this
					setTimeout(function() {
						if(that.windowWidth < 1200) {
							// $(".head").css('width',"1200px")
							$(".logo").css('margin-left', 0);
							$(".right").css('margin-right', 0);
						} else {
							$(".logo").css('margin-left', '10%');
							$(".right").css('margin-right', '10%');
						}
						// console.log(that.windowWidth)
						that.timer = false
					}, 400)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.head {
		position: absolute;
		z-index: 11;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .7);
		border-bottom: 1px solid #000;
		width: 100%;
		height: 63px;
		line-height: 63px;
		color: #fff;
		.logo {
			float: left;
			margin-left: 10%;
			position: relative;
			display: flex;
			height: 100%;
			justify-content: space-between;
			align-items: center;
			img {
				width: 210px;
				height: 30px;
			}
			&:hover .arrow{
				cursor: pointer;
				transform: rotate(270deg);
			}
		}
		.right {
			float: right;
			margin-right: 10%;
			display: flex;
			justify-content: space-between;
			div {
				&:hover {
					cursor: pointer;
				}
			}
			span {
				margin-right: 32px;
				&:hover {
					text-decoration: underline;
					color: #000;
				}
			}
			.child {
				position: absolute;
				z-index: 10;
				top: 63px;
				left: 0;
				right: 0;
				display: none;
				text-align: center;
				background: rgba(0, 0, 0, .7);
				a {
					margin: 50px;
				}
			}
		}
	}
	
	.classify {
		a {
			color: #fff;
			text-decoration: none;
			&:hover {
				color: #E2E3CE;
			}
		}
		&:last-child {
			.child {
				text-align: right;
				padding-right: 200px;
				a {
					margin-right: 50px;
				}
			}
		}
	}
	
	.triangle {
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 10px solid rgba(0, 0, 0, .7);
		position: absolute;
		/*// transform: rotate(45deg);*/
		top: 65px;
		left: 63.5px;
	}
	
	.second {
		position: absolute;
		z-index: 10;
		top: 75px;
		background: rgba(0, 0, 0, .7);
		a {
			color: #fff;
			text-decoration: none;
		}
		.trans {
			position: absolute;
			top: -30px;
			opacity: 0;
			&:hover {
				opacity: 0;
			}
		}
		p {
			height: 30px;
			width: 120px;
			line-height: 30px;
			padding: 5px 10px;
			text-align: center;
			&:hover {
				background: #009FE9;
			}
		}
	}
	
	.arrow {
		width: 30px;
		height: 30px;
		text-align: center;
		transform: rotate(180deg);
		transform-origin: 50% 50%;
		transition:transform .5s;
	}
</style>