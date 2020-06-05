<template>
  <div class="navMenu">
    <header>
      <el-menu class="el-menu-demo" mode="horizontal" router :default-active="path">
        <el-menu-item style="margin-left: 0;">
          <router-link to="/">
            <svg viewBox="0 0 200 91" fill="#0084FF" width="64" height="30">
              <path
                d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                fill-rule="evenodd"
              />
            </svg>
          </router-link>
        </el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/explore">发现</el-menu-item>
        <el-menu-item>等你回答</el-menu-item>
        <el-menu-item>
          <el-autocomplete
            :placeholder="placeholder"
            style="width: 326px;"
            size="small"
            suffix-icon="el-icon-search"
            v-model="search"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
          ></el-autocomplete>
          <el-button type="primary" size="small" style="margin-left: 15px;">提问</el-button>
        </el-menu-item>
        <el-menu-item style="float: right; margin-right: 0;" class="el-dropdown-link">
          <el-dropdown @command="handleCommand" placement="bottom">
            <el-avatar
              shape="square"
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-user-solid"></i>我的主页
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-s-check"></i>创作者中心
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-s-tools"></i>设置
              </el-dropdown-item>
              <el-dropdown-item command="logout">
                <i class="el-icon-switch-button"></i>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item class="bell">
          <el-dropdown placement="bottom">
            <a class="el-icon-s-comment info" style="font-size: 22px;"></a>
            <sup class="badge">99</sup>
            <el-dropdown-menu slot="dropdown" style="width: 350px; text-align: center;">
              <el-dropdown-item disabled style="font-size: 16px;">我的私信</el-dropdown-item>
              <el-dropdown-item divided>暂无数据</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item class="bell">
          <el-dropdown placement="bottom">
            <a class="el-icon-message-solid info" style="font-size: 22px;"></a>
            <sup class="badge">99</sup>
            <el-dropdown-menu slot="dropdown" style="width: 350px; text-align: center;">
              <el-dropdown-item disabled style="font-size: 16px;">系统通知</el-dropdown-item>
              <el-dropdown-item divided>暂无数据</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    msg: String
  },
  created() {
    this.onRouteChanged()
    this.$api.getSearchList().then(res => {
      this.placeholder = res.data.placeholder
      this.restaurants = res.data.list
    })
  },
  data() {
    return {
      path: "",
      restaurants: [],
      search: "",
      placeholder: ""
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    handleSelect(item) {
      console.log(item)
    },
    onRouteChanged() {
      let that = this;
      that.path = that.$route.path;
      if (
        that.path == "/recommend" ||
        that.path == "/follow" ||
        that.path == "/hot"
      )
        that.path = "/";
      // console.log(that.$route.path)
    },
    handleCommand(command) {
      if (command == "logout") {
        this.$api.logout()
        this.$router.push({ name: "Login" })
      }
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "onRouteChanged"
  }
}
</script>

<style scoped>
header {
  background-color: white;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  position: fixed;
  height: 52px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

.el-menu-demo {
  width: 1000px;
  margin: 0 auto;
  border-bottom: none;
  height: 52px;
}

.el-menu-demo li {
  height: 52px;
  line-height: 47px;
  padding-left: 0;
  padding-right: 0;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  font-size: 15px;
  box-sizing: border-box;
}

.is-active {
  border-bottom: 3px solid #0079f5 !important;
}

.el-menu-demo .bell {
  float: right;
}

.badge {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(30%) translateX(80%) !important;
  background-color: rgb(241, 64, 60);
  line-height: 16px;
  color: white;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 40%;
  border: 2px solid white;
  box-sizing: border-box;
  font-size: 10px;
}

.el-autocomplete {
  padding-bottom: 4px !important;
}

.info:hover {
  color: #73859a !important;
}
</style>
