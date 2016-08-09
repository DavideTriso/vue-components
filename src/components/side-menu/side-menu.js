import BlockMixin from './../../mixins/block';
import * as SideMenuItem from './item/item.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'side-menu',
    };
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  components: {
    SideMenuItem,
  },
};
