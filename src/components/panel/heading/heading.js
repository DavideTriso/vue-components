import ElementMixin from './../../../mixins/element';
import * as PanelTitle from './../title/title.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'heading',
    };
  },

  props: {
    /**
     * Title
     */
    title: {
      required: false,
    },
  },

  computed: {
    /**
     * Computed property which will output
     * whether the heading has a title
     *
     * @returns {boolean} If the heading has a title
     */
    hasTitle() {
      return !!this.title;
    },
  },

  components: {
    PanelTitle,
  },
};
