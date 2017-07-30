export const Navigation = require('./navigation.vue');
export const Content = require('./navigation-content.vue');
export const Item = require('./navigation-item.vue');
export const Link = require('./navigation-link.vue');

export const install = (Vue) => {
  Vue.component('v-navigation', Navigation);
  Vue.component('v-navigation-content', Content);
  Vue.component('v-navigation-item', Item);
  Vue.component('v-navigation-link', Link);
};

export default {
  Navigation,
  Content,
  Item,
  Link,
};
