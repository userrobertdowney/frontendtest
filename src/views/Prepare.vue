<template>
  <div class="page page-prepare">
    <h1>数据加载</h1>
  </div>
</template>

<script>
/**
 * 数据加载
 * 组件目的：一个代为获取数据的组件，获取过程中显示loading提示，失败显示错误消息，点击可再次获取数据
 * 组件需求：
 * 1，可传递api接口和params参数属性，用来获取数据，并可监听success事件拿到获取到的数据
 * 2，../api/http.js定义axios实例，超时30000，并定义请求和响应的拦截器，2xx为成功，非2xx为失败
 * 3，../api/index.js定义请求的假接口，getData方法，post方式
 * 4，默认显示loading并提示‘加载中...’，触发axios通过接口去获取数据，
 * 5，如果请求成功，则隐藏loading，触发success事件，事件的参数为获取到的数据
 * 6，如果请求失败，则显示失败消息和图标，点击失败消息和图标则再次loading去获取数据
 * 7，可以使用van-loading和van-icon组件
 *
 * 备注：此页面仅用来展示组件的功能，具体组件请到components目录创建
 */
export default {
  name: 'Prepare',
}
</script>

<style lang="less">
.page-prepare {
  color: inherit;
}
</style>
