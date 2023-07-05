<script setup lang="ts">
import Left from './layoutLeft.vue'
import Content from './LayoutContent.vue'
import { onMounted, ref } from 'vue'
const selectedKeys = ref(['1'])
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
    <a-layout>
      <a-layout-sider breakpoint="lg" collapsed-width="0">
        <div class="logo" />
        <div>

        </div>
        <!-- <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <span class="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <span class="nav-text">nav 4</span>
          </a-menu-item>
        </a-menu> -->
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>

.ant-layout-sider {
    position: relative;
    min-width: 0;
    background: #bac2ca;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #fff;
}
</style>
