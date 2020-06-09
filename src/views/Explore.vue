<template>
  <div id="explore">
    <div class="header">
      <i class="el-icon-s-order" style="font-size: 32px; color: #0079f5; padding-right: 10px;"></i>
      <h2>最新专题</h2>
    </div>
    <div class="cards">
      <el-card body-style="padding: 0;" v-for="(item, index) in exploreList" :key="index">
        <a :href="item.link">
          <img :src="item.picture" alt />
        </a>
        <div class="body">
          <div class="top">
            <div class="left">
              <h2>{{item.title}}</h2>
              <p style="margin-top: 4px; height: 17px; line-height: 17px; font-size: 12px; color: #999;">{{item.hour}} 小时前更新 {{item.browse}} 浏览</p>
            </div>
            <div class="right">
               <el-button type="primary" size="medium">关注专题</el-button>
            </div>
          </div>
          <div class="list">
            <a :href="item.link" v-for="(item, index) in item.list" :key="index"><p style="padding-bottom: 10px;"><el-tag style="font-size: 10px; display: inline; padding: 5px;" type="info">{{item.tag}}</el-tag><span style="padding-left: 10px; font-size: 14px;">{{item.content}}</span></p></a>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui'

export default {
  name: "Explore",
  data() {
    return {
      exploreList: []
    }
  },
  mounted() {
    let loadingInstance = Loading.service({ fullscreen: true, text: '加载中' })
    this.$api.getExploreList().then(res => {
      this.exploreList = res.data
      loadingInstance.close()
    })
  }
}
</script>

<style scoped>
#explore {
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.el-card {
  width: 490px;
  height: 450px;
  margin-bottom: 20px;
}

.el-card img {
  width: 100%;
  height: 200px;
}

.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.body {
  padding: 20px;
}

.top {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list {
  padding-top: 15px;
}

a {
  color: black;
}
</style>
