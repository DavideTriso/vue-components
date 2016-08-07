import BlockMixin from './../../mixins/block';
import * as VIcon from './../icon/icon.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'nav-bar',

      navIcon: {
        variants: [
          'menu',
          'nav-icon',
        ],
      }
    };
  },

  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },

  components: {
    VIcon,
  },
};
