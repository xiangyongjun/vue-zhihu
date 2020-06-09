<template>
  <div id="main">
    <div class="main-left">
      <el-card class="box-card" body-style="padding: 0;">
        <div slot="header" class="clearfix">
          <router-link :to="{name: 'Recommend'}">推荐</router-link>
          <router-link :to="{name: 'Follow'}">关注</router-link>
          <router-link :to="{name: 'Hot'}">热榜</router-link>
        </div>
        <router-view></router-view>
      </el-card>
    </div>
    <div class="right">
      <router-view name="mainRight"></router-view>
      <el-card class="NewGlobalWrite" body-style="padding: 0;">
        <div class="top">
          <ul>
            <li>
              <a href>
                <el-avatar style="color: #0079f5; font-size: 22px; margin-bottom: 10px; background-color: #e1effe;" :size="40" icon="el-icon-document"></el-avatar>
                <p>回答问题</p>
              </a>
            </li>
            <li>
              <a href>
                <el-avatar style="color: #ff8a2f; font-size: 22px; margin-bottom: 10px; background-color: #fff1e7;" :size="40" icon="el-icon-video-camera"></el-avatar>
                <p>发视频</p>
              </a>
            </li>
            <li>
              <a href>
                <el-avatar style="color: #ffc03d; font-size: 22px; margin-bottom: 10px; background-color: #fff8e8;" :size="40" icon="el-icon-edit-outline"></el-avatar>
                <p>发视频</p>
              </a>
            </li>
            <li>
              <a href>
                <el-avatar style="color: #00b8b6; font-size: 22px; margin-bottom: 10px; background-color: #e1f7f6;" :size="40" icon="el-icon-edit"></el-avatar>
                <p>写想法</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <a href>稍后答</a>
          <a href>草稿箱</a>
        </div>
      </el-card>
      <el-card>
        <a href style="width: 100%; display: flex; justify-content: space-between;">
          <div style="display: flex; align-items: center;">
            <i style="color: #8590a6; font-size: 18px;" class="el-icon-user-solid"></i>
            <span style="padding-left: 8px; color: #8590a6; font-size: 14px;">创作者中心</span>
            <span style="padding-left: 8px; color: rgb(0, 132, 255); font-size: 14px;">Lv 1</span>
          </div>
          <i style="color: #8590a6; font-size: 18px;" class="el-icon-arrow-right"></i>
        </a>
      </el-card>
      <el-card class="category" body-style="padding: 0;">
        <ul>
            <li>
              <a href class="live">
                <i style="color: #ffc83e; font-size: 25px; margin-bottom: 10px;" class="el-icon-lightning"></i>
                <p>live</p>
              </a>
            </li>
            <li>
              <a href class="bookStore">
                <i style="color: #00cf7f; font-size: 25px; margin-bottom: 10px;" class="el-icon-notebook-1"></i>
                <p>书店</p>
              </a>
            </li>
            <li>
              <a href class="desk">
                <i style="color: #0079f5; font-size: 25px; margin-bottom: 10px;" class="el-icon-eleme"></i>
                <p>圆桌</p>
              </a>
            </li>
            <li>
              <a href class="column">
                <i style="color: #007ddf; font-size: 25px; margin-bottom: 10px;" class="el-icon-bank-card"></i>
                <p>专栏</p>
              </a>
            </li>
            <li>
              <a href class="consult">
                <i style="color: #396de4; font-size: 25px; margin-bottom: 10px;" class="el-icon-money"></i>
                <p>付费咨询</p>
              </a>
            </li>
            <li>
              <a href class="wiki">
                <i style="color: #4d5dc3; font-size: 25px; margin-bottom: 10px;" class="el-icon-notebook-2"></i>
                <p>百科</p>
              </a>
            </li>
        </ul>
      </el-card>
      <el-card>
        <a target="_blank" href="https://github.com/xiangyongjun/vue-zhihu" class="github">
          <el-avatar size="medium" src="http://img4.imgtn.bdimg.com/it/u=2586243650,1628445668&fm=26&gp=0.jpg"></el-avatar>
          <span>Give me a Star, Thanks.</span>
        </a>
      </el-card>
      <el-card body-style="padding: 0;">
        <a target="_blank" href="https://github.com/xiangyongjun" style="width: 100%; height: 100%;">
          <img style="width: 100%; height: 100%; display: block;"
          src="http://img3.imgtn.bdimg.com/it/u=1224394186,2419055903&fm=26&gp=0.jpg"
          class="image"
          />
        </a>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
#main {
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.main-left {
  width: 694px;
}

.right {
  width: 296px;
}

.clearfix a {
  color: black;
  margin-right: 40px;
}

.router-link-active {
  color: #0084ff !important;
}

.el-card {
  margin-bottom: 10px;
}

.right .NewGlobalWrite .top {
  border-bottom: 1px solid #EBEEF5;
}

.right .NewGlobalWrite .top ul {
  display: flex;
  justify-content: space-around;
  padding: 15px 5px 15px 5px;
}

.right .NewGlobalWrite .top li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 12px;
}

.right .NewGlobalWrite .top li a:hover {
  color: #175199;
}

.right .NewGlobalWrite .bottom {
  height: 50px;
  display: flex;
}

.right .NewGlobalWrite .bottom a {
  color: #8590a6;
  border-right: 1px solid #EBEEF5;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.right .NewGlobalWrite .bottom a:hover {
  color: #175199;
}

.right .category {
  padding-top: 30px;
}

.right .category ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.right .category ul li {
  width: 33.3%;
  padding-bottom: 30px;
}

.right .category ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8590a6;
  font-size: 14px;
}

.right .category ul li .live:hover {
  color: #ffc83e;
}

.right .category ul li .bookStore:hover {
  color: #00cf7f;
}

.right .category ul li .desk:hover {
  color: #0079f5;
}

.right .category ul li .column:hover {
  color: #007ddf;
}

.right .category ul li .consult:hover {
  color: #007ddf;
}

.right .category ul li .wiki:hover {
  color: #4d5dc3;
}

.right .github {
  width: 100%;
  height: 100%;
  color: #8590a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right .github:hover{
  color: rgb(0, 132, 255);;
}

.right .github span {
  font-weight: bold;
}
</style>
