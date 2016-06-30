import BlockMixin from './../../mixins/block';
import * as ListItem from './Item/Item.vue';

export default {
  data() {
    return {
      block: 'List',
    };
  },

  props: {
    /**
     * The items to be displayed inside
     * the list
     */
    items: {
      type: Array,
      required: true,
    },
  },

  mixins: [
    BlockMixin,
  ],

  components: {
    ListItem,
  },
};
