<!--
 * @Author: wjw
 * @Date: 2023-06-27 10:34:05
 * @LastEditTime: 2023-07-06 18:52:57
 * @LastEditors: wjw
 * @Description: 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import DraggableItem from './components/DraggableItem.vue'
// import Left from './components/Left.vue'
import { onMounted } from 'vue'
// import Layout from './page/Layout/index.vue'

onMounted(() => {
  // 取消开始的loading动画
  setTimeout(() => {
    const preLoader: any = document.querySelector('#pre-loader')
    preLoader.style.display = 'none'
  }, 1000);

  // fix: firefox 下 拖拽 会新打卡一个选项卡
  // https://github.com/JakHuang/form-generator/issues/15
  document.body.ondrop = event => {
    event.preventDefault()
    event.stopPropagation()
  }
})
</script>

<template>
  <div>
    <!-- <DraggableItem /> -->
    <!-- <Layout /> -->
    <!-- <Left /> -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
