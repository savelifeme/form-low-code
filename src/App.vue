<!--
 * @Author: wjw
 * @Date: 2023-06-27 10:34:05
 * @LastEditTime: 2023-07-06 18:52:57
 * @LastEditors: wjw
 * @Description: 
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import VDRGorky from './components/VDRGorky.vue'
import VLine from './components/VLine.vue'
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
  <div class="bigRouter">
    <div class="routerLine">
      <div>
        <a-button>
          <router-link to="/">VLine</router-link>
        </a-button>
      </div>
      <div>
        <a-button>
          <router-link to="/VDRGorky">VDRGorky</router-link>
        </a-button>
      </div>
    </div>
    <div class="routerView">
      <router-view></router-view>
    </div>
    <!-- <DraggableItem /> -->
    <!-- <Layout /> -->
    <!-- <Left /> -->
  </div>
  <!-- <HelloWorld /> -->
  <!-- <VDRGorky /> -->
  <!-- <VLine /> -->
</template>

<style scoped>
.bigRouter {
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.routerLine {
  width: 260px;
  border: 1px solid rgb(177, 116, 116);
}

.routerView {
  width: calc(100% - 260px);
  border: 1px solid rgb(176, 228, 161);
}

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
