import Vue from 'vue'
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
Vue.prototype.$sleep = sleep
