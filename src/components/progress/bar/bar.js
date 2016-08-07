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
      element: 'bar',
    };
  },

  props: {
    /**
     * Progress
     */
    progress: {
      type: Number,
      required: true,
    },
  },

  computed: {
    /**
     * Styling
     *
     * @returns {object} The styling
     */
    styling() {
      return {
        width: `${this.progress}%`,
      };
    },
  },
};
