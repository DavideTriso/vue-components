import ElementMixin from './../../../mixins/element';
import * as DropdownItem from './../item/item.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'menu',
    };
  },

  props: {
    /**
     * Menu items
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * Chosen menu item
     */
    chosen: {
      required: false,
    },

    /**
     * Collapse function
     */
    collapse: {
      type: Function,
      required: true,
    },

    /**
     * Field name
     */
    fieldName: {
      type: String,
      required: false,
    },
  },

  components: {
    DropdownItem,
  },
};
