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
      element: 'link',
    };
  },

  props: {
    /**
     * Link content
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * Link route
     */
    to: {
      type: String,
      required: true,
    },

    /**
     * If vue-router will be used
     */
    vueRouter: {
      type: Boolean,
      required: true,
    },
  },
};
