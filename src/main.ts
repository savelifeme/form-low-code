import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import {
  DatePicker,
  Button,
  Divider,
  Grid,
  Layout,
  Space,
  Breadcrumb,
  Dropdown,
  Menu,
  Pagination,
  Steps,
  AutoComplete,
  Cascader,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  Avatar,
  Card,
  Descriptions,
  Empty,
  Image,
  List,
  Popover,
  Statistic,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  Tree,
  Alert,
  Drawer,
  Modal,
  Popconfirm,
  Progress,
  Skeleton,
  Spin,
  ConfigProvider,
  Typography,
  Row,
  Col,
  Badge,
} from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";


const vm = createApp(App);
vm.use(DatePicker)
  .use(Button)
  .use(Divider)
  .use(Row)
  .use(Col)
  .use(Layout)
  .use(Space)
  .use(Breadcrumb)
  .use(Dropdown)
  .use(Menu)
  .use(Pagination)
  .use(Steps)
  .use(AutoComplete)
  .use(Cascader)
  .use(Checkbox)
  .use(Form)
  .use(Input)
  .use(InputNumber)
  .use(Radio)
  .use(Select)
  .use(Slider)
  .use(Switch)
  .use(TimePicker)
  .use(Transfer)
  .use(TreeSelect)
  .use(Upload)
  .use(Avatar)
  .use(Card)
  .use(Descriptions)
  .use(Empty)
  .use(Image)
  .use(List)
  .use(Popover)
  .use(Statistic)
  .use(Table)
  .use(Tabs)
  .use(Tag)
  .use(Timeline)
  .use(Tooltip)
  .use(Tree)
  .use(Alert)
  .use(Drawer)
  .use(Modal)
  .use(Popconfirm)
  .use(Progress)
  .use(Skeleton)
  .use(Spin)
  .use(ConfigProvider)
  .use(Typography)
  .use(Badge);
vm.mount('#app') // 全局注册
