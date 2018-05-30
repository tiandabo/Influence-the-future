<template>
	<div id="classroom">
		<banner imgUrl="static/test/黑晶/banner/0f94ee762915c2de1d5070f7dccad388.jpg"></banner>
		<div class="solution">
			<p class="solution-name">VR教育一体化解决方案</p>
			<div class="solution-sort">
				<div v-for="i in sort">{{i}}</div>
			</div>
			<div class="solution-table"  v-for='i in tables'>
				<div class="tables-sort">
					<img :src="i.imgUrl" />
				</div>
				<div class="tables">
					<p class="table-name">{{i.name}}</p>
					<table cellspacing="0">
						<tr v-for="trs in i.trs">
							<td v-for="tds in trs">{{tds}}</td>
						</tr>
					</table>
					<p class="table-context">{{i.context}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import banner from "@/components/Banner";
import axios from 'axios';
export default {
  name: "classroom",
  data() {
    return {
      sort: ["VR-K12学科教育", "STEAM创客教育", "VR兴趣学习角"],
      tables: [
        {
          name: "VR-K12学科教育",
          imgUrl: "static/test/黑晶/class-room/451.png",
          context:
            "以教学大纲为基础，适用于全国小、初、高教材的全沉浸、交互式VR课程",
          trs: [
            ["教师集控", "VR book 1台"],
            ["学生VR一体机", "50台 (可选)"],
            ["VR授课云平台", "1套"],
            ["VR K12课程体系", "120节课，200课时"],
            ["增值服务", "师生培训、系统维护、课程升级、售后维护"]
          ]
        },
        {
          name: "STEAM创客教育",
          imgUrl: "static/test/黑晶/class-room/452.png",
          context:
            "以教学大纲为基础，适用于全国小、初、高教材的全沉浸、交互式VR课程",
          trs: [
            ["教师集控", "VR book 1台"],
            ["学生VR一体机", "50台 (可选)"],
            ["VR授课云平台", "1套"],
            ["VR K12课程体系", "120节课，200课时"],
            ["增值服务", "师生培训、系统维护、课程升级、售后维护"]
          ]
        },
        {
          name: "VR兴趣学习角",
          imgUrl: "static/test/黑晶/class-room/453.png",
          context:
            "以教学大纲为基础，适用于全国小、初、高教材的全沉浸、交互式VR课程",
          trs: [
            ["教师集控", "VR book 1台"],
            ["学生VR一体机", "50台 (可选)"],
            ["VR授课云平台", "1套"],
            ["VR K12课程体系", "120节课，200课时"],
            ["增值服务", "师生培训、系统维护、课程升级、售后维护"]
          ]
        }
      ]
    };
  },
  methods: {
 
  },
  mounted() {
	   axios({
        method: "get",
        url: "http://cangdu.org:8001/v1/cities?type=group"
      })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
  },
  components: {
    banner
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.classroom {
	min-width: 1100px;
}
.solution {
  text-align: center;
  .solution-name {
    font-size: 30px;
    margin: 30px;
  }
  .solution-sort {
    margin: 30px auto;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .solution-table {
    margin: 0px auto;
    padding: 50px 0;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    .tables-sort {
      text-align: left;
    }
    > div {
      flex: 1;
    }
    .tables {
      text-align: left;
      .table-name {
        font-size: 30px;
        color: #666;
      }
      .table-context {
        font-size: 12px;
        color: #666;
        margin: 10px 0;
      }
    }
    table {
      margin: 10px 0;
      border: 0.5px solid #ccc;
    }
    td {
      color: #666;
      border-bottom: 0.5px solid #ccc;
      border-left: 0.5px solid #ccc;
      text-align: left;
      font-size: 14px;
      width: 220px;
      padding: 8px;
    }
  }
}
</style>