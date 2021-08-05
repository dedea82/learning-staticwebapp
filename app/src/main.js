import Vue from 'vue'
import App from '@/App.vue'
import router from '@/vue.router.js' 

new Vue({
  router,
  config: {
    productionTip: false
  },
  render: h => h(App),
}).$mount('#app')
