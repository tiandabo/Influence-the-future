<template>
	<div class="head">
		<div class="logo" @click="refresh" @mouseover="over" @mouseout="outs">
			<img src="../../static/test/logo/logo2.png" />
			<div class="arrow">
				<!--<svg width="100%" height="100%" class="arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
					<polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgba(255,255,255,.5);stroke-width:2" />
				</svg>-->
				<img src="../../static/test/箭头.svg"/>
			</div>
			<div class="triangle" v-if="secondMenuShow">
			</div>
			<div v-if="secondMenuShow" class="second">
				<p class="trans"></p>
				<p v-for="(i,index) in secondMenu">
					<router-link :to="i.jump">{{i.name}}</router-link>
				</p>
				<p>
					<a href="http://www.henanhuize.com/" target="_blank">未来教育</a>
				</p>
				<p>
					<a href="#">超级实验室</a>
				</p>
			</div>
		</div>
		<div class="right" v-if="search==false">
			<div v-for="i in classify" :key="i.name" @mousemove="hovers" class="classify">
				<span :title="i.name" class="span"><router-link :to="i.jump">{{i.name}}</router-link></span>
				<div v-if="i.child" class="child">
					<router-link :title="child.name" v-for="child in i.child" :key="child.name" :to="child.jump">{{child.name}}</router-link>
				</div>
			</div>
		</div>
		<div class="right-img">
			<div class="search" v-if="search">
				<input type="text" v-focus placeholder="Search……" @blur="searchHide" />
				<img src="../../static/test/关闭.svg" @click="searchHide" />
			</div>
			<img src="static/test/搜索.svg" class="search-svg" @click="searchShow" v-else/>
			<div class="language-div" @mousemove="languageShow">
				<img src="static/test/社区-国际化.svg" class="internationalization" />
				<div class="language">
					<p>ENGLISH</p>
					<p>简体中文[SIMPLIFIED CHINESE]</p>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
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
					//					{
					//						name: '新闻',
					//						jump: "/"
					//					},
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
				secondMenu: [
					{
						name: '全景摄像头',
						jump: "/camera"
					},
					{
						name: 'VR教育',
						jump: "/classroom",
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
						name: 'VR科技党建',
						jump: 'party'
					},
					{
						name: 'VR购物Buy+',
						jump: 'buy'
					}
				],
				windowWidth: window.outerWidth,
				secondMenuShow: false,
				search: false
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
		directives: {
			focus: {
				// 指令的定义  
				inserted: function(el) {
					el.focus()
				}
			}
		},
		methods: {
			//二级菜单
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
			//下拉菜单
			over() {
				this.secondMenuShow = true;
			},
			outs() {
				this.secondMenuShow = false;
			},
			//搜索框
			searchShow() {
				this.search = true;
			},
			searchHide() {
				this.search = false;
			},
			//语言现实隐藏
			languageShow(){
				$(".language-div").hover(function(){
					$(this).children(".language").stop().slideDown()
				},function(){
					$(this).children(".language").stop().slideUp()
				})
			},
//			languageHide(){
//				this.language=false;
//			},
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
						if(that.windowWidth < 1100) {
							$(".head").css('width', "1100");
						} else {
							$(".head").css('width', "100%");
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
		align-items: center;
		display: flex;
		justify-content: space-between;
		color: #fff;
		.logo {
			/*float: left;*/
			margin-left: 50px;
			position: relative;
			display: flex;
			height: 100%;
			justify-content: space-between;
			align-items: center;
			>img {
				width: 210px;
				height: 30px;
			}
			&:hover .arrow {
				cursor: pointer;
				transform: rotate(180deg);
			}
		}
		.right {
			/*float: left;
			margin-left: 10%;*/
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
				height: 80px;
				line-height: 80px;
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
		transform: rotate(90deg);
		transform-origin: 50% 50%;
		transition: transform .5s;
		img {
			width: 100%;
			height: 100%;
		}
	}
	/*.right-img 
	}*/
	
	.right-img {
		display: flex;
		align-items: center;
		height: 100%;
		.search {
			width: 300px;
			height: 40%;
			padding: 10px;
			background: rgba(255, 255, 255, .3);
			display: flex;
			justify-content: space-between;
			border-radius: 6px;
			input {
				width: 250px;
				height: 100%;
				background: rgba(255, 255, 255, 0);
				border: none;
				outline: none;
				color: #F4F4F4;
			}
		}
		.internationalization {
			margin:  0 80px 0 50px;
		}
	}
	
	input::-webkit-input-placeholder {
		/*WebKit browsers*/
		color: #B4B6BA;
	}
	
	input::-moz-input-placeholder {
		/*Mozilla Firefox*/
		color: #B4B6BA;
	}
	
	input::-ms-input-placeholder {
		/*Internet Explorer*/
		color: #B4B6BA;
	}
	.language {
		position: absolute;
		width: 150px;
		font-size: 14px;
		top: 63px;
		right: 10px;
		text-align: center;
		padding: 10px;
		background: rgba(0,0,0,.6);
		display: none;
		p{
			padding: 5px 1px;
		}
	}
</style>