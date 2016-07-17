import ElementMixin from '../../../mixins/element';
import * as TableRow from '../row/row.vue';

export default {
  data() {
    return {
      element: 'header',
    };
  },

  props: {
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
