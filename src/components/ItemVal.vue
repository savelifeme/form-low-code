<template>
  <div class="row gx-5">
    <div style='margin-bottom:20px'>
      <a-row
        type="flex"
        align="middle"
        style="padding:10px;background:rgb(147, 220, 190)"
      >
        <a-col :span="3">
          <h3>Draggable</h3>
        </a-col>
        <a-col :span="9">
          <a-button
            type="primary"
            @click="viewHtml"
          >
            预览
          </a-button>
        </a-col>
      </a-row>
    </div>
    <div class="col-3">
      <div class="itt">
        <div class="group">
          <draggable
            :list="modules.groupLeft"
            ghost-class="ghost"
            handle=".move"
            filter=".forbid"
            :force-fallback="true"
            chosen-class="chosenClass"
            animation="300"
            @start="onStart"
            @end="onEnd"
            :fallback-class="true"
            :fallback-on-body="true"
            :touch-start-threshold="50"
            :fallback-tolerance="50"
            :move="onMove"
            class="groupLeft"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            @change="log"
          >
            <template #item="{ element }">
              <div :class="element.disabledMove ? 'forbid item' : 'item'">
                <label class="move">{{ element.title }}</label>
                <p v-html="element.title == '业务管控' ? '业务管控不允许拖拽和停靠' : `内容：${element.title}`"></p>
                <a-image
                  :src="element.logo_path"
                  width="88px"
                  height="88px"
                ></a-image>
              </div>
            </template>
          </draggable>
        </div>

      </div>
    </div>
    <div class="col-7 content">
      <div class="group">
        <draggable
          :list="modules.groupContent1"
          ghost-class="ghost"
          handle=".move"
          filter=".forbid"
          :force-fallback="true"
          chosen-class="chosenClass"
          animation="300"
          @start="onStart"
          @end="onEnd"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          :move="onMove"
          group="people"
          @change="log"
          item-key="id"
          style="display:flex;"
        >
          <template #item="{ element }">
            <div :class="element.disabledMove ? 'forbid item' : 'item'">
              <label class="move">{{ element.title }}</label>
              <p v-html="element.title == '业务管控' ? '业务管控不允许拖拽和停靠' : `内容：${element.title}`"></p>
              <a-image
                :src="element.logo_path"
                width="88px"
                height="88px"
              ></a-image>
            </div>
          </template>
        </draggable>
      </div>
      <div class="group">
        <draggable
          :list="modules.groupContent2"
          ghost-class="ghost"
          handle=".move"
          filter=".forbid"
          :force-fallback="true"
          chosen-class="chosenClass"
          animation="300"
          @start="onStart"
          @end="onEnd"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          :move="onMove"
          group="people"
          @change="log"
          item-key="id"
          style="display:flex;"
        >
          <template #item="{ element }">
            <div :class="element.disabledMove ? 'forbid item' : 'item'">
              <label class="move">{{ element.title }}</label>
              <p v-html="element.title == '业务管控11' ? '业务管控不允许拖拽和停靠' : `内容：${element.title}`"></p>
              <a-image
                :src="element.logo_path"
                width="88px"
                height="88px"
              ></a-image>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <ViewHtml
      ref="viewRef"
      :list="modules.groupContent2"
    />

    <RawDisplay
      class="col-2"
      :value="modules.groupContent1"
      title="modules.groupContent1"
    />
    <RawDisplay
      class="col-2"
      :value="modules.groupContent2"
      title="modules.groupContent2"
    />
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable';
import RawDisplay from './RawDisplay.vue'
import ViewHtml from './ViewHtml.vue'
let idGlobal = 8;

export default {
  name: "functionVal",
  components: {
    draggable,
    RawDisplay,
    ViewHtml,
  },
  data() {
    return {
      enabled: true,
      modules: {
        groupLeft: [
          {
            "fieldList": [],
            "title": "业务管控",
            "id": 1,
            "access": "/workbench",
            "icon_att_id": 5023,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
            "path": "common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
            "is_fixed": true
          },
          {
            "fieldList": [],
            "title": "进度统计",
            "id": 2,
            "access": "/progressModule/dashboard",
            "icon_att_id": 5034,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/b227caca6d5e4cc3f6db947896b093e2.png",
            "path": "common/config/logo/20230314/b227caca6d5e4cc3f6db947896b093e2.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "access": "/technology/dashboard",
            "title": "技术统计",
            "id": 3,
            "icon_att_id": 5033,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/ff315b9e4b39c8e1b3f240d3275f024e.png",
            "path": "common/config/logo/20230314/ff315b9e4b39c8e1b3f240d3275f024e.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "title": "安全统计",
            "id": 4,
            "access": "/safety/dashboard",
            "icon_att_id": 5032,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/64beb90a31798e07b6c083f340884512.png",
            "path": "common/config/logo/20230314/64beb90a31798e07b6c083f340884512.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "title": "施工标准化",
            "id": 5,
            "access": "/construction",
            "icon_att_id": 5031,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/55e55db48ed65b9982c679b1bcb22392.png",
            "path": "common/config/logo/20230314/55e55db48ed65b9982c679b1bcb22392.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "title": "环水保巡检",
            "id": 6,
            "access": "/siteInspection/water/Gis",
            "icon_att_id": 5030,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/752818475374155e8da895c30db047d8.png",
            "path": "common/config/logo/20230314/752818475374155e8da895c30db047d8.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "title": "安全巡检",
            "id": 7,
            "access": "/siteInspection/SInspection/SGis",
            "icon_att_id": 5029,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/fc665be6eb39d9755f79a4d6877b4d66.png",
            "path": "common/config/logo/20230314/fc665be6eb39d9755f79a4d6877b4d66.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [],
            "title": "质量巡检",
            "id": 8,
            "access": "/siteInspection/quality/Gis",
            "icon_att_id": 5028,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/4b189a89bb3bd44485f513b7c622df06.png",
            "path": "common/config/logo/20230314/4b189a89bb3bd44485f513b7c622df06.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [
              {
                "url": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/ff061ca90418b3771757241b56d122a0.png"
              }
            ],
            "title": "数字沙盘",
            "id": 9,
            "access": "",
            "icon_att_id": 5027,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/ff061ca90418b3771757241b56d122a0.png",
            "path": "common/config/logo/20230314/ff061ca90418b3771757241b56d122a0.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [
              {
                "url": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/6d4fb0fce6efccfeee61debe0a5b2eb8.png"
              }
            ],
            "title": "安全BIM",
            "id": 10,
            "access": "",
            "icon_att_id": 5026,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/6d4fb0fce6efccfeee61debe0a5b2eb8.png",
            "path": "common/config/logo/20230314/6d4fb0fce6efccfeee61debe0a5b2eb8.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [
              {
                "url": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/a660c8d05ede4403c4b2fb2b016b9e85.png"
              }
            ],
            "title": "质量BIM",
            "id": 11,
            "access": "",
            "icon_att_id": 5025,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/a660c8d05ede4403c4b2fb2b016b9e85.png",
            "path": "common/config/logo/20230314/a660c8d05ede4403c4b2fb2b016b9e85.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          },
          {
            "fieldList": [
              {
                "url": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/a26cdf35745fe8b63a5b800a0b20cc74.png"
              }
            ],
            "title": "数据驾驶舱",
            "id": 12,
            "access": "",
            "icon_att_id": 5024,
            "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/a26cdf35745fe8b63a5b800a0b20cc74.png",
            "path": "common/config/logo/20230314/a26cdf35745fe8b63a5b800a0b20cc74.png",
            "is_checked": true,
            disabledMove: false, disabledPark: false,
          }
        ],
        groupContent1: [{
          "fieldList": [],
          "title": "上业务管控",
          "id": 13,
          "access": "/workbench",
          "icon_att_id": 5023,
          "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
          "path": "common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
          "is_checked": true,
          disabledMove: false,
          disabledPark: false,
          "is_fixed": true
        },],
        groupContent2: [{
          "fieldList": [],
          "title": "下业务管控",
          "id": 12,
          "access": "/workbench",
          "icon_att_id": 5023,
          "logo_path": "http://10.216.62.2:9999/wuhai/common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
          "path": "common/config/logo/20230314/b6e798a0bbbcb9c16840b6997eace06c.png",
          "is_checked": true,
          disabledMove: false,
          disabledPark: false,
          "is_fixed": true
        },]
      }
    };
  },
  methods: {
    //拖拽开始的事件
    onStart() {
      console.log("开始拖拽");
    },
    //拖拽结束的事件
    onEnd() {
      console.log("结束拖拽");
    },
    onMove(e) {
      //不允许停靠
      if (e.relatedContext.element.disabledPark == true) return false;
      return true;
    },
    log: function (evt) {
      window.console.log(evt);
    },
    cloneDog(record) {
      console.log(record)
      return {
        ...record,
        id: idGlobal++,
        title: record.title + idGlobal++
      };
    },
    viewHtml() {
      console.log('<--- --->:>>', '预览了', this.$refs.viewRef);
      this.$refs.viewRef.visible = true;

    }
  }
};
</script>
<style scoped>
.content {
  background-color: #f1f1f1;
  padding: 20px;
}

body {
  padding: 0px;
  margin: 0px;
  background-color: #f1f1f1;
}

.itt {
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  padding: 20px;
  width: 400px;
}

.group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.item {
  border: solid 1px #ddd;
  padding: 0px;
  margin: 0px 10px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 220px;
  user-select: none;
}

.item > label {
  border-bottom: solid 1px #ddd;
  padding: 6px 10px;
  color: #333;
}

.item > label:hover {
  cursor: move;
}

.item > p {
  padding: 6px 10px;
  color: #666;
}

.ghost {
  border: solid 1px rgb(19, 41, 239) !important;
}

.chosenClass {
  opacity: 1;
  border: solid 1px red;
}

.fallbackClass {
  background-color: aquamarine;
}

/* .groupLeft {
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  padding: 20px;
} */
</style>