import ElementMixin from '../../../mixins/element';

export default {
  data() {
    return {
      element: 'link',
    };
  },

  props: {
    /**
     * The content
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * The route
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

  mixins: [
    ElementMixin,
  ],
};
