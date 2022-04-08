import Vue from 'vue'
import App from '@/App.vue'
import { router } from '@/vue.router.js'
import appInsights from '@/vue.appinsights.js'

if (appInsights) {
  appInsights.loadAppInsights();
  Vue.config.errorHandler = function (err) {
    appInsights.trackException({ exception: err });
    console.error(err);
  }
}

new Vue({
  router,
  config: {
    productionTip: false,
  },
  render: h => h(App),
}).$mount('#app')
