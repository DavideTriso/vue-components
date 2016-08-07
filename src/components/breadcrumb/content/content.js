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
      element: 'content',
    };
  },

  props: {
    /**
     * Breadcrumb item content
     */
    content: {
      type: String,
      required: true,
    },
  },
};
