<template>
  <div class="row">
    <a-modal
      v-model:visible="visible"
      title="Basic Modal"
      @ok="handleOk"
      width="980"
      bodyStyle="height:660px"
    >
      <p>{{ list[0].title }}</p>
      <p>Some contents...</p>
      <p>Some contents...</p>

      <div>
        <h3>预览</h3>
        <table>
          <colgroup>
            <col style="background-color: #0f0" />
            <col span="2" />
          </colgroup>
          <tr>
            <th>青柠</th>
            <th>柠檬</th>
            <th>橘子</th>
          </tr>
          <tr>
            <td>绿色</td>
            <td>黄色</td>
            <td>橙色</td>
          </tr>
        </table>
        <table
          style="tableLayout: fixed;border-collapse:collapse; width:100%;border: 1px solid #000000"
          cellspacing="0"
          cellpadding="0"
          class="createTable"
        >
          <tr>
            <td
              colspan="2"
              v-for="item in list"
              :key="item.title"
            >{{item.title}}</td>
          </tr>
        </table>

        <!-- <table
          style="tableLayout: fixed;border-collapse:collapse; width:100%;border: 1px solid #000000"
          cellspacing="0"
          cellpadding="0"
          class="createTable"
        >
         <colgroup>
          <col width='80px'>
          </col>
        </colgroup>
        <thead>

          <tr
            v-for="(item,index) in thead"
            :key="item.name"
          >
            <th colspan="2">{item.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td> 
            <td>with two columns</td>
          </tr>
        </tbody> -->
        <!-- <colgroup>
          thead.map((item) => {
          return 
          })}
        </colgroup> -->
        <!-- <tbody>
          {state.siteList
          .filter((item) => {
          return Object.keys(item.history_data).length > 0;
          })
          .map((row, rowIndex) => {
          return (
          <tr>
            {thead.map((rowItem) => {
            return (
            <td
              colspan={rowItem.colRender
              ?
              rowItem.colRender({
              index:
              rowIndex,
              item:
              row
              })
              :
              rowItem.col}
            >
              {rowItem.customRender ? (
              rowItem.customRender({ text: row[`${rowItem.dataIndex}`], record: rowItem, index: rowIndex })
              ) : (
              <a-tooltip
                placement="topLeft"
                title={row[`${rowItem.dataIndex}`]}
              >
                {row[`${rowItem.dataIndex}`]}
              </a-tooltip>
              )}
            </td>
            );
            })}
          </tr>
          );
          })}
        </tbody> -->
        <!-- </table> -->
      </div>
    </a-modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable';

export default {
  name: "viewHtml",
  components: {
    draggable
  },
  props: ['list'],
  data() {
    console.log(this.list)
    return {
      enabled: true,
      visible: false,
      thead: [
        {
          dataIndex: "name",
          name: "站点名称",
          width: 150,
          col: 0,
          colRender({ index, item }) {
            if (index == 2) {
              return 3;
            }
            return 2;
          },
        },
        { dataIndex: "monitor_time", name: "监测时间", width: 120, col: 0 },
        {
          dataIndex: "season_water_level_status",
          name: "状态",
          width: 80,
          customRender: ({ text, record, index }) => {
            if (text == 1) {
              return "正常";
            }
            if (text == 2) {
              return "异常";
            }
            return text;
          },
        },
        { dataIndex: "mx_water_level", name: "最大", width: 70 },
        { dataIndex: "mx_water_level_time", name: "最大水位时间", width: 120 },
      ]
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>
<style scoped>
.createTable td {
  border-bottom-color: #000000;
  border-bottom-style: solid;
  border-bottom-width: 0.75pt;
  border-left-color: #000000;
  border-left-style: solid;
  border-left-width: 0.75pt;
  border-right-color: #000000;
  border-right-style: solid;
  border-right-width: 0.75pt;
  border-top-color: #000000;
  border-top-style: solid;
  border-top-width: 0.75pt;
  padding: 1px;
  vertical-align: middle;
  line-height: 16px;
  font-size: 12pt;
}
tr,
td,
th {
  border-width: 1px;
}
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