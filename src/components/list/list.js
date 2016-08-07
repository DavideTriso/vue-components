import BlockMixin from './../../mixins/block';
import * as ListItem from './item/item.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'list',
    };
  },

  props: {
    /**
     * Items to be displayed inside the list
     */
    items: {
      type: Array,
      required: true,
    },
  },

  components: {
    ListItem,
  },
};
