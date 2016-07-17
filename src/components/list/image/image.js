import ElementMixin from '../../../mixins/element';

export default {
  data() {
    return {
      element: 'image',
    };
  },

  props: {
    /**
     * The image to be displayed inside
     * the list item
     */
    image: {
      type: String,
      required: true,
    },

    /**
     * The alt tag
     */
    title: {
      type: String,
      required: true,
    },
  },

  mixins: [
    ElementMixin,
  ],
};
