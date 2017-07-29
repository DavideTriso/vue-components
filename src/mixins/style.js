import CSSUtil from '@/utils/css';

export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The variants of the component.
     */
    variants: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },

    /**
     * The variant of the component.
     */
    variant: {
      type: String,
      required: false,
    },

    /**
     * The contextual type of the component.
     */
    type: {
      type: String,
      required: false,
      validator(value) {
        return !!CSSUtil.contextualTypes.find(type => type === value);
      },
    },
  },

  /**
   * The computed properties the mixin can use.
   */
  computed: {
    /**
     * Get the variants of the components.
     *
     * @returns {Array} The correct variants.
     */
    getVariants() {
      if (this.type) {
        this.variants.push(this.type);
      }

      if (this.variant) {
        this.variants.push(this.variant);
      }

      return this.variants;
    },
  },

  methods: {
    /**
     * Method used to get the class name for the CSS module.
     *
     * @param {string} className The original CSS class name.
     *
     * @returns {string} The class name used as the CSS module.
     */
    getClass(className) {
      if (!this.$style) {
        return className;
      }

      return this.$style[className] || '';
    },
  },
};
