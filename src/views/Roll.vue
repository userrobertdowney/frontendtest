<template>
  <div class="page page-roll">
    <h1>滚动监听</h1>
  </div>
</template>

<script>
/**
 * 滚动监听
 * 组件目的：监听组件包裹的DOM，当DOM出现在设定的屏幕可视区域的时候，触发打印传递给组件的属性数据
 * 组件需求：
 * 1，可以包裹其它DOM，并可接收一个sequence字符串和distance数字属性
 * 2，监听页面滚动，需要使用节流(throttle)控制每100毫秒触发滚动检测
 * 3，当包裹的DOM出现在设定的屏幕可视区域时，打印传递给sequence的字符串，并清除滚动监听
 * 4，可传递不同distance的值来设定距离底部不同距离时触发打印，默认为刚出现在屏幕可视区域即触发
 *
 * 备注：此页面仅用来展示组件的功能，具体组件请到components目录创建
 */
export default {
  name: 'Roll',
}
</script>

<style lang="less">
.page-roll {
  color: inherit;
}
</style>
