import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
     axios.defaults.baseURL = 'http://cmsapi.rwlaile.com/'; 
  } else {
    //test 测试环境接口地址
     axios.defaults.baseURL = 'http://118.178.135.132:8890/';
  }
} else {
  // 本地环境接口地址
  axios.defaults.baseURL = 'http://118.178.135.132:8890/';
  console.log('生产环境')  
}


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");