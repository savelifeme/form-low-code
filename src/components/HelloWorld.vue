<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="dragArea list-group" :list="list1" :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog" @change="log">
        <template #item="{ element }" :key="element.id">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="dragArea list-group" :list="list2" group="people" @change="log">
        <template #item="{ element }" :key="element.id">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
       </draggable>
    </div>

    <RawDisplay class="col-3" :value="list1" title="List 1" />

    <RawDisplay class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable';
import RawDisplay from './RawDisplay.vue'
let idGlobal = 8;
export default {
  name: "custom-clone",
  components: {
    draggable,
    RawDisplay,
  },
  data() {
    return {
      list1: [
        { name: "dog 1", id: 1 },
        { name: "dog 2", id: 2 },
        { name: "dog 3", id: 3 },
        { name: "dog 4", id: 4 }
      ],
      list2: [
        { name: "cat 5", id: 5 },
        { name: "cat 6", id: 6 },
        { name: "cat 7", id: 7 }
      ],
      temList: [
         {
          title: "序号",
          dataIndex: "number",
          customRender: ({ title, record, index }) => this.metas.perPage * (this.metas.currentPage - 1) + index + 1,
          width: 80,
          fixed: "left",
          ellipsis: true,
        },
      ]
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    cloneDog({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
      };
    }
  }
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
  width: 160px;
}

.list-group-item i {
  cursor: pointer;
}
</style>