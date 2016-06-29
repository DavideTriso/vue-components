import ElementMixin from './../../../mixins/element';
import * as TableRow from './../Row/Row.vue';

export default {
  data() {
    return {
      element: 'body',
    };
  },

  props: {
    /**
     * The array of items
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The columns of the table
     */
    columns: {
      type: Array,
      required: true,
    },
  },
  components: {
    TableRow,
  },

  mixins: [
    ElementMixin,
  ],
};
