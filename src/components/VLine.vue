<template>
  <div class="boxBig">
    <!-- <div style="height: 900px; width: 100%; border: 1px solid red; position: relative;"> -->
    <vue-draggable-resizable :grid='[20, 20]' :w="200" :h="200" :parent="true" :debug="false" :min-width="200"
      :min-height="200" :isConflictCheck="true" :snap="true" :snapTolerance="10" @refLineParams="getRefLineParams"
      class="test1">
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="200" :h="200" :parent="true" :x="210" :debug="false" :min-width="200" :min-height="200"
      :isConflictCheck="true" :snap="true" :snapTolerance="10" @refLineParams="getRefLineParams" class="test2">
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="200" :h="200" :parent="true" :x="420" :debug="false" :min-width="200" :min-height="200"
      :isConflictCheck="true" :snap="true" :snapTolerance="10" @refLineParams="getRefLineParams" class="test3">
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="200" :h="200" :parent="true" :x="630" :debug="false" :min-width="200" :min-height="200"
      :isConflictCheck="true" :snap="true" :snapTolerance="10" @refLineParams="getRefLineParams" class="test4">
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="200" :h="200" :parent="true" :x="840" :debug="false" :min-width="200" :min-height="200"
      :isConflictCheck="true" :snap="true" :snapTolerance="10" @refLineParams="getRefLineParams" class="test5">
    </vue-draggable-resizable>
    <!--辅助线-->
    <span class="ref-line v-line" v-for="item in vLine" v-show="item.display"
      :style="{ left: item.position, top: item.origin, height: item.lineLength }" />
    <span class="ref-line h-line" v-for="item in hLine" v-show="item.display"
      :style="{ top: item.position, left: item.origin, width: item.lineLength }" />
    <span class="ref-line h-line" v-for="item in hLine" v-show="item.display"
      :style="{ top: item.position, left: item.origin, width: item.lineLength }" />
    <!--辅助线END-->
    <!-- </div> -->
  </div>
</template>

<script>
import VueDraggableResizable from "./vResizable/vue-draggable-resizable.vue";
import './vResizable/vue-draggable-resizable.css'

export default {
  name: 'vLine',
  components: {
    VueDraggableResizable
  },
  data() {
    return {
      vLine: [],
      hLine: []
    }
  },
  methods: {
    // 辅助线回调事件
    getRefLineParams(params) {
      const { vLine, hLine } = params
      this.vLine = vLine
      this.hLine = hLine
    }
  }
}
</script>

<style>
.boxBig {
  width: 100%;
  height: 1270px;
  position: relative;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
}

.test1 {
  background-color: rgb(239, 154, 154);
}

.test2 {
  background-color: rgb(129, 212, 250);
}

.test3 {
  background-color: rgb(174, 213, 129);
}

.test4 {
  background-color: rgb(233, 155, 240);
}

.test5 {
  background-color: rgb(230, 37, 53);
}
</style>