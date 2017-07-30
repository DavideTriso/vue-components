export const Content = require('./content.vue');

export const install = (Vue) => {
  Vue.component('v-content', Content);
};

export default {
  Content,
};
