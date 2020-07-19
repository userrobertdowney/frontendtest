<template>
  <div class="page page-poster">
    <h1>生成海报</h1>
  </div>
</template>

<script>
/**
 * 生成海报
 * 组件目的：依据设计图，用canvas动态生成一张分享图片（包含二维码）
 * 组件需求：
 * 1，设计图见：../assets/img/poster.png
 * 2，所有的参数和切图地址见：../constants/poster.js，切图已支持跨域
 * 3，请使用canvas能力和qrcode插件来实现，勿用其它任何插件
 * 4，图片请在加载完毕后画入，文字有单行和多行文字
 * 5，在生成的过程中，默认显示loading和提示文字“海报生成中...”
 * 6，如果传递showPercent属性为true，则显示生成进度百分比，进度百分比的值需要+1递增，不可以跳跃增加。
 * 7，生成过程中，如果出现错误，则需要取消loading，显示错误消息，如果生成成功则取消显示loading，显示生成的图片
 * 8，loading组件可以使用van-loading组件
 *
 * 备注：此页面仅用来展示组件的功能，具体组件请到components目录创建
 */
export default {
  name: 'Poster',
}
</script>

<style lang="less">
.page-poster {
  color: inherit;
}
</style>
