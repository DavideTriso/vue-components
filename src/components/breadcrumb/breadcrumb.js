import BlockMixin from '../../mixins/block';
import * as BreadcrumbItem from './item/item.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'breadcrumb',
    };
  },

  props: {
    /**
     * Breadcrumb items
     */
    items: {
      type: Array,
      required: true,
    },
  },

  components: {
    BreadcrumbItem,
  },
};
