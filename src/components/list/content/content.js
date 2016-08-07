import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'content',
    };
  },

  props: {
    /**
     * Content
     */
    content: {
      type: String,
      required: true,
    },
  },
};
