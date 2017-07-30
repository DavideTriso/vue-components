export const Breadcrumb = require('./breadcrumb.vue');
export const Content = require('./breadcrumb-content.vue');
export const Item = require('./breadcrumb-item.vue');
export const Link = require('./breadcrumb-link.vue');

export const install = (Vue) => {
  Vue.component('v-breadcrumb', Breadcrumb);
  Vue.component('v-breadcrumb-content', Content);
  Vue.component('v-breadcrumb-item', Item);
  Vue.component('v-breadcrumb-link', Link);
};

export default {
  Breadcrumb,
  Content,
  Item,
  Link,
};
