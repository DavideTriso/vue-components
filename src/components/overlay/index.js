export const Overlay = require('./overlay.vue');

export const install = (Vue) => {
  Vue.component('v-overlay', Overlay);
};

export default {
  Overlay,
};
