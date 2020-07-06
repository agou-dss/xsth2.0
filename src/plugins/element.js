import Vue from 'vue'
  import { Button, Tabs, TabPane, Collapse, CollapseItem, MessageBox, Message} from 'element-ui'

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
