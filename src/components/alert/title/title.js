import ElementMixin from '../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      element: 'title',
    };
  },

  props: {
    /**
     * The message content
     */
    content: {
      type: String,
      required: false,
    },
  },
};
