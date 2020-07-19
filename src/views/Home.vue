<template>
  <div class="page page-home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <h1>欢迎进行Vue的测试</h1>
    <ul>
      <li>1, 请完成5道题中的任意3题，全部完成更好；</li>
      <li>2, 每道题目的要求见具体页面内的注释说明，页面仅用来展示已实现组件的功能，具体组件请到components目录创建；</li>
      <li>3, 代码必须要有完整的注释，规范见：<a target="_blank" href="https://jsdoc.app/">JSDOC</a>；</li>
      <li>4, 样式请使用BEM风格书写，规范见：<a target="_blank" href="https://en.bem.info/">BEM</a>；</li>
      <li>5, 脚手架采用了postcss自动转换px为rem，只需按设计图1比1写样式即可；</li>
      <li>
        6, 代码风格采用<a target="_blank" href="https://prettier.io/">prettier</a>格式化，请在提交代码前，请使用`yarn
        lint`校验并格式化代码。
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="less">
.page-home {
  text-align: center;
  h1 {
    margin: 24px 0;
  }
  ul {
    text-align: left;
  }
}
</style>
