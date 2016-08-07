import ElementMixin from './../../../mixins/element';
import * as ListImage from './../image/image.vue';
import * as ListContent from './../content/content.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    /**
     * Element name used for BEM
     */
    return {
      element: 'item',
    };
  },

  props: {
    /**
     * Text to be displayed inside the list item
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * Image to be displayed inside the list item
     */
    image: {
      type: String,
      required: false,
    },
  },

  computed: {
    /**
     * Computed property which will output
     * whether the item has an image
     *
     * @returns {boolean} If the item has an image
     */
    hasImage() {
      return !!this.image;
    },
  },

  components: {
    ListImage,
    ListContent,
  },
};
