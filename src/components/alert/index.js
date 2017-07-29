export const Alert = require('./alert.vue');
export const Body = require('./alert-body.vue');
export const Close = require('./alert-close.vue');
export const Timer = require('./alert-timer.vue');
export const Title = require('./alert-title.vue');

export const install = (Vue) => {
  Vue.component('v-alert', Alert);
  Vue.component('v-alert-body', Body);
  Vue.component('v-alert-close', Close);
  Vue.component('v-alert-timer', Timer);
  Vue.component('v-alert-title', Title);
};

export default {
  Alert,
  Body,
  Close,
  Timer,
  Title,
};
