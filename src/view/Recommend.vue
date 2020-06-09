<template>
  <div id="recommend" ref="list">
    <div class="card" v-for="(item, index) in recommendList" :key="index">
      <a class="title" :href="item.link">
        <h3>{{item.title}}</h3>
      </a>
      <div class="content">
        <a :href="item.link" class="image" v-if="item.picture">
          <el-image
            style="width: 190px; height: 105px; border-radius: 4px;"
            :src="item.picture"
            fit="fit"
          ></el-image>
        </a>
        <a class="text" href>
          {{checkText(item.content)}}
          <a class="all">
            阅读全文
            <i class="el-icon-arrow-down"></i>
          </a>
        </a>
      </div>
      <div class="footer">
        <div class="left">
          <el-button type="primary" size="small" icon="el-icon-caret-top">赞同 {{item.agree}}</el-button>
          <el-button type="primary" size="small" icon="el-icon-caret-bottom"></el-button>
        </div>
        <div class="right">
          <a>
            <i class="el-icon-s-comment"></i>
            {{item.comment}} 条评论
          </a>
          <a>
            <i class="el-icon-s-promotion"></i>分享
          </a>
          <a>
            <i class="el-icon-star-on"></i>收藏
          </a>
          <a>
            <i class="el-icon-s-opportunity"></i>喜欢
          </a>
          <el-dropdown>
            <a>
              <i class="el-icon-more"></i>
            </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>没有帮助</el-dropdown-item>
              <el-dropdown-item>举报</el-dropdown-item>
              <el-dropdown-item>不感兴趣</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="card" v-loading="loading" style="height: 40px;" v-show="loading"></div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      recommendList: [],
      lock: false,
      loading: true
    }
  },
  methods: {
    checkText(str) {
      let l = str.replace(/[\u0391-\uFFE5]/g, "aa").length //先把中文替换成两个字节的英文，在计算长度
      if (l > 130) return str.substring(0, 130) + "..."
      return str
    },
    getList() {
      if (!this.lock) {
        this.lock = true
        this.loading = true
        this.$api.getRecommendList().then(res => {
          res.data.forEach(item => {
            this.recommendList.push(item)
          })
          this.loading = false
          this.lock = false
        })
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      let listHeight =
        this.$refs.list.offsetHeight -
        document.body.offsetHeight +
        this.$refs.list.offsetTop
      if (scrollTop > listHeight) {
        this.getList()
      }
    }
  },
  mounted() {
    this.getList()
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.card {
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
  display: flex;
  flex-direction: column;
}

.content {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.title {
  margin-bottom: 5px;
}

.title:hover {
  color: #175199;
}

.text {
  font-size: 15px;
  flex: 1 1;
}

.text:hover {
  color: #646464;
}

.image {
  margin-right: 20px;
}

.footer {
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.el-button {
  color: #0084ff;
  background: rgba(0, 132, 255, 0.1);
  border-color: transparent;
  padding: 10px;
}

.el-button:hover {
  background-color: rgba(0, 132, 255, 0.15);
}

i {
  padding-right: 5px;
}

.right a {
  margin-left: 25px;
  font-size: 15px;
  color: #73859a;
  cursor: pointer;
}

.right a:hover {
  color: #62788e;
}

.all {
  color: #175199;
  font-size: 14px;
}

.all:hover {
  color: #646464;
}
</style>
