import ElementMixin from './../../../mixins/element';
import * as TableCell from './../Cell/Cell.vue';

export default {
  data() {
    return {
      element: 'row',
    };
  },
  
  props: {
    /**
     * If the row is located at the table header
     */
    isHeader: {
      type: Boolean,
      required: false,
    },

    /**
     * If the row is located at the table body
     */
    isFooter: {
      type: Boolean,
      required: false,
    },

    /**
     * The item displayed in the row
     */
    item: {
      type: Object,
      required: false,
    },

    /**
     * The columns which will be displayed
     */
    columns: {
      type: Array,
      required: true,
    },
  },

  computed: {
    /**
     * Computed property to check if the row is a body row
     *
     * @returns {boolean}
     */
    isBody() {
      return !this.isHeader && !this.isFooter;
    },
  },

  components: {
    TableCell,
  },
  
  mixins: [
    ElementMixin,
  ],
};
