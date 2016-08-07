import BlockMixin from '../../mixins/block';
import * as BreadcrumbItem from './item/item.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      block: 'breadcrumb',
    };
  },

  props: {
    /**
     * The breadcrumb items
     */
    items: {
      type: Array,
      required: true,
    },
  },

  components: {
    /**
     * The displayed breadcrumb item
     */
    BreadcrumbItem,
  },
};
