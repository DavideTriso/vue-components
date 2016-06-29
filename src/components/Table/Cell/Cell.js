import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'cell',
    };
  },

  props: {
    /**
     * Checks if the col is a header
     */
    isHeader: {
      type: Boolean,
      required: false,
    },

    /**
     * The content to be displayed
     */
    content: {
      type: String,
      required: true,
    },
  },

  mixins: [
    ElementMixin,
  ],
};
