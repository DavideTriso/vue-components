export const Label = require('./label.vue');

export const install = (Vue) => {
  Vue.component('v-label', Label);
};

export default {
  Label,
};
