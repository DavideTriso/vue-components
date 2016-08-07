import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    /**
     * Element name used for BEM
     */
    return {
      element: 'image',
    };
  },

  props: {
    /**
     * Image to be displayed inside the list item
     */
    image: {
      type: String,
      required: true,
    },

    /**
     * Alt tag
     */
    title: {
      type: String,
      required: true,
    },
  },
};
