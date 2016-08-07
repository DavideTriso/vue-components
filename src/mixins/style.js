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

  methods: {
    /**
     * Method used to find the variants of a slot
     *
     * @param element The name of the slot
     * @returns {Array} The variants
     */
    elementVariants(element) {
      if (this[element] && this[element].variants) {
        return this[element].variants;
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

    propOptional(element, key) {
      if (typeof element === 'undefined') {
        return undefined;
      }

      if (typeof element === 'string') {
        return element;
      }

      if (element[key]) {
        return element[key];
      }

      return undefined;
    },

    elementOptional(element, key) {
      if (element[key]) {
        return element[key];
      }

      return undefined;
    },
  },
};
