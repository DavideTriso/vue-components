import CSSUtil from '../../../utils/css';
import ElementMixin from '../../../mixins/element';

export default {
  data() {
    return {
      element: 'cell',
    };
  },

  props: {
    /**
     * Checks if the cell is located
     * at the header
     */
    isHeader: {
      type: Boolean,
      required: false,
    },

    /**
     * Checks if the cell is located
     * at the footer
     */
    isFooter: {
      type: Boolean,
      required: false,
    },

    /**
     * The content to be displayed
     */
    content: {
      type: String,
      required: true,
    },
  },

  computed: {
    /**
     * Computed property which will output
     * the corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      const variants = this.variants || [];

      if (this.isHeader) {
        variants.push('header');
      }

      if (this.isFooter) {
        variants.push('footer');
      }

      const classes = CSSUtil.elementClasses(this.block, this.element, variants);

      if (!this.contextualStyle) {
        this.contextualStyle = this.$parent.contextualStyle;
      }

      classes.push(
        CSSUtil.contextualClass(
          CSSUtil.has(
            this.block, this.element
          ),
          this.contextualStyle
        )
      );

      return classes;
    },
  },

  mixins: [
    ElementMixin,
  ],
};
