<template>
  <draggable-container>
    <draggable-child
      v-for="item in initialChildren"
      :key="item.id"
      :id="item.id"
      :width="item.width"
      :height="item.height"
      @stop="handleStop"
      @start="handleStart"
      @drag="handleDrag"
      @resize="handleResize"
      :default-position="item.position"
    >
      <div
        class="item"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'move',
          boxSizing: 'border-box',
          background: item.background,
        }"
      >
        <span>size: {{ item.size }}</span>
        <span>drag me</span>
      </div>
    </draggable-child>
  </draggable-container>
</template>
<script>
// import draggableContainer from './package/DraggableContainer.jsx';
// import draggableChild from './package/DraggableChild.jsx';
import './package/common.css';
// import {draggableContainer,draggableChild } from 'vue-dragline'
// import 'vue-dragline/lib/vue-dragline.css';
export default {
  // components: {
  //   draggableContainer,
  //   draggableChild
  // },
  data() {
    return {
      initialChildren: [
        { id: 1, background: '#8ce8df', width: 100, height: 100, position: { x: 100, y: 10 } },
        { id: 2, background: '#8ce8df', width: 100, height: 100, position: { x: 400, y: 106 } },
        { id: 3, background: '#d2aff6', width: 100, height: 100, position: { x: 100, y: 316 } },
        { id: 4, background: '#fee493', width: 100, height: 100, position: { x: 480, y: 376 } },
      ]
    };
  },
  methods: {
    handleResize(e) {
      console.log(e, 'handleResize');
    },
    handleDrag(e) {
      console.log(e);
    },
    handleStop(e) {
      console.log(e, 'handleStop');
    },
    handleStart() {
      console.log('开始');
    },
    handleClick() {
      alert(1);
    }
  }
};
</script>