<template>
  <div class="row">
    <div class="col-3">
      <draggable class="dragArea list-group" :list="list1" :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog" @change="log">
        <template #item="{ element }" :key="element.id">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <!-- <RawDisplay class="col-3" :value="list1" title="List 1" /> -->

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
        {
          name: "表格头部",
          id: 1,
          _config_: {
            columns: [
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
            ],
            dataSource: [
              {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
              },
              {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
              },
            ],
            vNode: `<a-table :dataSource="dataSource" :columns="columns" />`
          }
        },
        { name: "自定义表格", id: 2 },
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