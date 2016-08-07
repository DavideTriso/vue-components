export default {
  props: {
    /**
     * The variant styling
     */
    variants: {
      type: Array,
      required: false,
    },

    /**
     * The contextual styling
     */
    contextualStyle: {
      type: String,
      required: false,
    },

    /**
     * The class
     */
    class: {
      type: String,
      required: false,
    },
  },
};
