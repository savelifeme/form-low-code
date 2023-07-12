<template>
  <div class="boxBig">
    <vue-draggable-resizable :grid='[20, 20]'>
      <p>Grid 20x20 starting from the top-left corner</p>
    </vue-draggable-resizable>
    <vue-draggable-resizable :grid='[20, 20]'>
      <p>Grid 20x20 starting from the top-left corner</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
// make sure your getting it in the components folder
import VueDraggableResizable from "vue-draggable-resizable/src/components/vue-draggable-resizable.vue";
import { ref } from "vue";
export default {
  name: "VDRGorky",
  components: {
    VueDraggableResizable,
  },
  setup() {
    const Width = ref(0);
    const Height = ref(0);
    const X = ref(0);
    const Y = ref(0);

    return {
      Width,
      Height,
      X,
      Y,
      onResize: (x, y, width, height) => {
        X.value = x;
        Y.value = y;
        Width.value = width;
        Height.value = height;
      },
      onDrag: (x, y) => {
        X.value = x;
        Y.value = y;
      },
    };
  },
};
</script>
<style scoped>
.boxBig {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
}
</style>