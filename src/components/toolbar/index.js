export const Toolbar = require('./toolbar.vue');
export const ToolbarTitle = require('./toolbar-title.vue');

export const install = (Vue) => {
  Vue.component('v-toolbar', Toolbar);
  Vue.component('v-toolbar-title', ToolbarTitle);
};

export default {
  Toolbar,
  ToolbarTitle,
};
