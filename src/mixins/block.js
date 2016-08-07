import CSSUtil from '../utils/css';
import StyleMixin from './style';

export default {
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * Computed property which will output the
     * corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      const classes = CSSUtil.blockClasses(this.block, this.variants);

      if (this.contextualStyle) {
        classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));
      }

      if (this.class) {
        classes.push(this.class);
      }

      return classes;
    },
  },

  methods: {


    /**
     * Method used to find the variants of a slot
     *
     * @param elemtent The name of the slot
     * @returns {Array} The variants
     */
    elementVariants(elemtent) {
      if (this[elemtent] && this[elemtent].variants) {
        return this[elemtent].variants;
      }

      return [];
    },

    /**
     * Method used to determine the contextual style for the slot
     *
     * @param element
     * @returns {string}
     */
    elementContextualStyle(element) {
      if (this[element] && this[element].contextualStyle) {
        return this[element].contextualStyle;
      }

      return this.contextualStyle;
    },

    elementContent(element) {
      if (typeof this[element] === 'string') {
        return this[element];
      }

      if (typeof this[element] === 'object' && this[element].content) {
        return this[element].content;
      }

      return undefined;
    },
  },
};
