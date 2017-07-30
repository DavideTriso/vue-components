export const Button = require('./button.vue');

export const install = (Vue) => {
  Vue.component('v-button', Button);
};

export default {
  Button,
};
