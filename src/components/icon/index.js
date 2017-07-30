export const Icon = require('./icon.vue');

export const install = (Vue) => {
  Vue.component('v-icon', Icon);
};

export default {
  Icon,
};
