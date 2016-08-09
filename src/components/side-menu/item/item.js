import ElementMixin from './../../../mixins/element';
import * as SideMenuLink from './../link/link.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'item',
    };
  },

  props: {
    content: {
      required: false,
    },

    routeName: {
      type: String,
      required: false,
    },
  },

  components: {
    SideMenuLink,
  },
};
