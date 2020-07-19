<template>
  <div class="page page-tip">
    <h1>分享提示</h1>
  </div>
</template>

<script>
/**
 * 分享提示
 * 组件目的：点击某个按钮，在微信环境和非微信环境显示不同的分享提示消息
 * 组件需求：
 * 1，垂直居中显示分享提示消息，微信显示：'发送给好友或分享到朋友圈吧~'，非微信显示：'已复制链接，分享给您的好友吧~'
 * 2，遮罩层可以使用van-overlay组件，点击遮罩层隐藏分享提示
 * 3，非微信环境，请使用clipboard组件复制location.href到剪切板
 * 4，生成分享提示即创建新的DOM元素，隐藏后需要删除生成的DOM元素
 * 5，将组件注册到Vue的prototype，以便在任意组件内直接使用this.$shareTips.show()显示提示
 *
 * 备注：此页面仅用来展示组件的功能，具体组件请到components目录创建
 */
export default {
  name: 'Tip',
}
</script>

<style lang="less">
.page-tip {
  color: inherit;
}
</style>
