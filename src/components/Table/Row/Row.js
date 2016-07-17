import CSSUtil from './../../../utils/css';
import ElementMixin from './../../../mixins/element';
import * as TableCell from './../cell/cell.vue';

export default {
  data() {
    return {
      element: 'row',
    };
  },

  props: {
    /**
     * If the row is located at the table header
     */
    isHeader: {
      type: Boolean,
      required: false,
    },

    /**
     * If the row is located at the table body
     */
    isFooter: {
      type: Boolean,
      required: false,
    },

    /**
     * The item displayed in the row
     */
    item: {
      type: Object,
      required: false,
    },

    /**
     * The columns which will be displayed
     */
    columns: {
      type: Array,
      required: true,
    },
  },

  computed: {
    /**
     * Computed property to check if the row is a body row
     *
     * @returns {boolean}
     */
    isBody() {
      return !this.isHeader && !this.isFooter;
    },

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

  components: {
    TableCell,
  },

  mixins: [
    ElementMixin,
  ],
};
