import BlockMixin from './../../mixins/block';
import * as NavBar from './bar/bar.vue';
import * as NavSide from './side/side.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'nav',
      collapsed: false,
    };
  },

  props: {
    bar: {
      required: false,
    },
  },

  components: {
    NavBar,
    NavSide,
  },
};
