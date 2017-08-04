export const List = require('./list.vue');
export const Content = require('./list-content.vue');
export const Image = require('./list-image.vue');
export const Item = require('./list-item.vue');

export const install = (Vue) => {
  Vue.component('v-list', List);
  Vue.component('v-list-content', Content);
  Vue.component('v-list-image', Image);
  Vue.component('v-list-item', Item);
};

export default {
  List,
  Content,
  Image,
  Item,
};
