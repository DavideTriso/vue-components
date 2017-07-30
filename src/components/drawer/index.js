export const Drawer = require('./drawer.vue');
export const Body = require('./drawer-body.vue');
export const Footer = require('./drawer-footer.vue');
export const Header = require('./drawer-header.vue');
export const Title = require('./drawer-title.vue');

export const install = (Vue) => {
  Vue.component('v-drawer', Drawer);
  Vue.component('v-drawer-body', Body);
  Vue.component('v-drawer-footer', Footer);
  Vue.component('v-drawer-header', Header);
  Vue.component('v-drawer-title', Title);
};

export default {
  Drawer,
  Body,
  Footer,
  Header,
  Title,
};
