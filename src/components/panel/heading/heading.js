import ElementMixin from '../../../mixins/element';
import * as PanelTitle from '../title/title.vue';

export default {
  data() {
    return {
      element: 'heading',
    };
  },

  props: {
    /**
     * The title
     */
    title: {
      required: false,
    },
  },


  mixins: [
    ElementMixin,
  ],

  components: {
    /**
     * The title of the panel
     */
    PanelTitle,
  },

  computed: {
    /**
     * Computed property which will check whether
     * there is a title
     *
     * @returns {boolean}
     */
    hasTitle() {
      return !!this.title;
    },
  },
};
