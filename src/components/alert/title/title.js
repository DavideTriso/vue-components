import ElementMixin from '../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'title',
    };
  },

  props: {
    /**
     * Title content
     */
    content: {
      type: String,
      required: false,
    },
  },
};
