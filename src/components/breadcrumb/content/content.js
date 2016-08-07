import ElementMixin from '../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      element: 'content',
    };
  },

  props: {
    /**
     * The text to be displayed
     */
    content: {
      type: String,
      required: true,
    },
  },
};
