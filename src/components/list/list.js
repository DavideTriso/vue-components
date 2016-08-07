import BlockMixin from '../../mixins/block';
import * as ListItem from './item/item.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      block: 'list',
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

  components: {
    ListItem,
  },
};
