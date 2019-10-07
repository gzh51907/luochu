import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
//引用ele ui
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element);

// 5.在组件使用路由

new Vue({
  // 4.把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
