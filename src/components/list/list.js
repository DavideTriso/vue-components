import BlockMixin from '../../mixins/block';
import * as ListItem from './item/item.vue';

export default {
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

  mixins: [
    BlockMixin,
  ],

  components: {
    ListItem,
  },
};
