import ElementMixin from './../../../mixins/element';
import * as ListImage from './../image/image.vue';
import * as ListContent from './../content/content.vue';

export default {
  data() {
    return {
      element: 'item',
    };
  },

  props: {
    /**
     * The text to be displayed inside
     * the list item
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * The image to be displayed inside
     * the list item
     */
    image: {
      type: String,
      required: false,
    },
  },

  computed: {
    /**
     * Computed property which will
     * check if there is an image present
     *
     * @returns {boolean}
     */
    hasImage() {
      return !!this.image;
    },
  },

  components: {
    ListImage,
    ListContent,
  },

  mixins: [
    ElementMixin,
  ],
};
