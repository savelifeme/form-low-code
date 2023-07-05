<!--
 * @Author: wjw
 * @Date: 2023-07-04 23:57:09
 * @LastEditTime: 2023-07-05 00:06:36
 * @LastEditors: wjw
 * @Description: 
-->
<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable</h3>
      <draggable :list="rows" class="row wrap fill-height align-center sortable-list"
        style="background: grey;">
        <template #item="{ element }" :key="element.index">
          <div class="col-3" style="background: red" :key="element.index">{{ element.index }}
            <!-- <draggable :list="row.items" tag="v-layout" :group="{ name: 'row' }" class="row wrap justify-space-around">
              <template #item="{ element }" :key="element.title">
                <a-card style="height: 100px;">{{ element.title }}</a-card>
              </template>
            </draggable> -->
          </div>
        </template>
      </draggable>

      <!-- <draggable class="dragArea list-group"" :list="list2 group="people" @change="log">
        <template #item="{ element }" :key="element.id">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable> -->
    </div>

    <!-- <rawDisplayer class="col-3" :value="rows" title="List" /> -->
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable';
// import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

// Vue.use(Vuetify);

export default {
  name: "functionVal",
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      rows: [
        {
          index: 1,
          items: [
            {
              title: "item 1"
            }
          ]
        },
        {
          index: 2,
          items: [
            {
              title: "item 2"
            },
            {
              title: "item 3"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}

.row-v {
  height: 150px;
  width: 200px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>