<template>
  <div class="page page-carousel">
    <h1>轮播图</h1>
  </div>
</template>

<script>
/**
 * 轮播图
 * 组件目的：依据设计图，写一个可以循环滑动的轮播图
 * 组件需求：
 * 1，设计图见：../assets/img/carousel.png
 * 2，所有的参数和切图地址见：../constants/carousel.js
 * 3，请使用swiper和vue-awesome-swiper插件来实现，模拟3D效果，可循环滑动
 * 4，请在所有图片加载完毕后再实例化轮播图
 * 5，滑动过程中，底部的文字需要根据当前显示的轮播图状态来切换
 * 6，点击左右箭头可触发左右滑动
 *
 * 备注：此页面仅用来展示组件的功能，具体组件请到components目录创建
 */
export default {
  name: 'Carousel',
}
</script>

<style lang="less">
.page-carousel {
  color: inherit;
}
</style>
