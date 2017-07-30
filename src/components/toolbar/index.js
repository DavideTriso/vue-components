export const Toolbar = require('./toolbar.vue');

export const install = (Vue) => {
  Vue.component('v-toolbar', Toolbar);
};

export default {
  Toolbar,
};
