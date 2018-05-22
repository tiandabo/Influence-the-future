<template>
  <div class="estate">
      <!-- vr地产 -->
      <banner imgUrl="../../static/test/黑晶/home/img-9.png" bgColor="#EBEAE1" :bannerText="bannerText"></banner>
      <div class="guide">
          <div v-for="i in guide">
              <h2>{{i.title}}</h2>
              <p>{{i.text}}</p>
          </div>
      </div>
      <div class="vrProduct">
          <h1>打造VR全数字营销中心</h1>
          <h1>提升地产项目销售效率，智慧营销</h1>
      </div>
      <div class="marketing-list">
          <div v-for="i in marketing">
          		<p>{{i.title}}</p>
              <p>{{i.text}}</p>
              <img :src="i.imgUrl"/>
          </div>
      </div>
       <div class="vrProduct">
          <h1>案例展示</h1>
      </div>
      <div class="case">
      		<div class="case-study" v-for="i in caseStudy">
      				<p>{{i.title}}</p>
      				<p>{{i.text}}</p>
      				<div>
      						<img :src="url" alt="" v-for="url in i.imgUrl"/>
      				</div>
      		</div>
      </div>
  </div>
</template>
<script>
    import banner from "@/components/Banner"
    export default {
        name: 'estate',
        data(){
            return{
                bannerText: {
                    title: 'VR地产&家装',
                    subtitle: '所见，即所得',
                    content: 'VR超级样板间|VR超级数字沙盘|智慧地产营销'
                },
                guide: [
                    {
                        title: '引爆地产营销',
                        text: '缩减地产营销成本、提升项目销售效率，主动体验、大数据支撑'
                    },
                    {
                        title: '打破空间/时间',
                        text: '突破传统，身临其境沉浸式体验。走进地产，跨区域营销互动'
                    },
                ],
                marketing: [
                    {
                        title: 'VR超级样板间',
                        text: '戴上VR头盔，如同站在真实样板间内，可自由“进入”每个房间：卧室、厨房、客厅、阳台等，甚至可以感受层高、空间、光线、昼夜变化，更换家具、随心设计装修风格，尽情享受未来的家。',
                        imgUrl: './../static/test/黑晶/地产/pic-2.png'
                    },
                    {
                        title: 'VR超级样板间',
                        text: '戴上VR头盔，如同站在真实样板间内，可自由“进入”每个房间：卧室、厨房、客厅、阳台等，甚至可以感受层高、空间、光线、昼夜变化，更换家具、随心设计装修风格，尽情享受未来的家。',
                        imgUrl: './../static/test/黑晶/地产/pic-2.png'
                    },
                    {
                        title: 'VR超级样板间',
                        text: '戴上VR头盔，如同站在真实样板间内，可自由“进入”每个房间：卧室、厨房、客厅、阳台等，甚至可以感受层高、空间、光线、昼夜变化，更换家具、随心设计装修风格，尽情享受未来的家。',
                        imgUrl: './../static/test/黑晶/地产/pic-2.png'
                    },
                ],
                caseStudy: [
                		{
                			title: 'VR超级样板间',
                      text: '戴上VR头盔，如同站在真实样板间内，可自由“进入”每个房间：卧室、厨房、客厅、阳台等，甚至可以感受层高、空间、光线、昼夜变化，更换家具、随心设计装修风格，尽情享受未来的家。',
                      imgUrl: [
                      		'../../static/test/黑晶/地产/pic-5.png',
                      		'../../static/test/黑晶/地产/pic-6.png',
                      		'../../static/test/黑晶/地产/pic-7.png',
                      		'../../static/test/黑晶/地产/pic-8.png',
                      ]
                		},
                		{
                			title: '鲁能智慧地产营销中心',
                      text: '为鲁能集团打造智慧地产营销中心，通过互动橱窗、光影沙盘、地面互动投影、AR游戏互动等，主动精准推送，实现智慧化互动营销。',
                      imgUrl: [
                      		'../../static/test/黑晶/地产/pic-9.png',
                      		'../../static/test/黑晶/地产/pic-10.png',
                      		'../../static/test/黑晶/地产/pic-11.png',
                      		'../../static/test/黑晶/地产/pic-12.png',
                      ]
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
    .guide {
        width: 60%;
        display: flex;
        margin: 40px auto;
        justify-content: space-between;
        div {
            margin: 20px 10px;
            width: 300px;
            text-align: center;
            h2 {
                color: #747774;
            }
            p {
                margin: 20px 5px;
                color: #666;
                    font-size: 16px;
    font-weight: normal;
            }
        }
    }
    .vrProduct {
        width: 100%;
        color: #666;
        text-align: center;
        padding: 50px 0;
        margin: 50px 0;
        background: #E3E3E3; 
    }
    .marketing-list {
        width: 60%;
        margin: 0 auto;
        div {
        	margin: 50px 0;
        	text-align: center;
        	p {
        		&:nth-child(1) {
        			font-size: 30px;
        			padding: 30px  0;
        		}
        		&:nth-child(2) {
        			font-size: 14px;
        			color: #666;
        			padding: 30px 100px;
        		}
        	}
        }
    }
    .case {
        width: 70%;
        margin: 0 auto;
        .case-study {
            text-align: center;
            // margin: 20px 80px 0;
            p{
                &:first-child {
                    font-size: 30px;
                    margin: 20px;
                }
                &:nth-child(2) {
                    margin: 20px 0;
                }
            }
            div {
                // display:flex;
                // flex-wrap: wrap;
                margin: 0 0 100px 0;
                img {
                    margin:10px;
                }
            }
        }
    }
</style>

