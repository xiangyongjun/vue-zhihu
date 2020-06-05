<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created() {
    console.log('作者：18软件1 向永俊')
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
