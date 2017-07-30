export const Card = require('./card.vue');
export const Body = require('./card-body.vue');
export const Footer = require('./card-footer.vue');
export const Header = require('./card-header.vue');
export const Title = require('./card-title.vue');

export const install = (Vue) => {
  Vue.component('v-card', Card);
  Vue.component('v-card-body', Body);
  Vue.component('v-card-footer', Footer);
  Vue.component('v-card-header', Header);
  Vue.component('v-card-title', Title);
};

export default {
  Card,
  Body,
  Footer,
  Header,
  Title,
};
