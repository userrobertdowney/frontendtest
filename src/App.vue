<template>
  <div id="app" class="app">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/roll">1.滚动监听</router-link>
      <router-link to="/prepare">2.数据加载</router-link>
      <router-link to="/tip">3.分享提示</router-link>
      <router-link to="/carousel">4.轮播图</router-link>
      <router-link to="/poster">5.生成海报</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import './config/vant'
import './assets/less/main.less'

export default {
  name: 'App',
}
</script>
<style lang="less">
.app {
  width: 750px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: @backgroundColor;
  overflow: hidden;
}
.nav {
  padding: 0 32px;
  height: 90px;
  background-color: #fff;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  a {
    color: @second;
    display: inline-block;
    line-height: 90px;
    padding: 0 16px;
    margin: 0 10px;
    text-decoration: none;
    &.router-link-exact-active {
      color: @primary;
    }
  }
}
.page {
  padding: 32px;
}
</style>
