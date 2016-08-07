import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'item',
    };
  },

  props: {
    /**
     * Chosen item
     */
    chosen: {
      required: false,
    },

    /**
     * Collapse function
     */
    collapse: {
      type: Function,
      required: true,
    },

    /**
     * Field name
     */
    fieldName: {
      type: String,
      required: false,
    },

    /**
     * Given item
     */
    item: {
      required: true,
    },
  },

  computed: {
    /**
     * The content to be displayed
     *
     * @returns {String} The content
     */
    content() {
      if (typeof this.item === 'string') {
        return this.item;
      }

      return this.item[this.fieldName];
    },
  },

  methods: {
    /**
     * Method used to activate the item
     *
     * @param {object} item The item
     */
    activate(item) {
      this.chosen = item;
      this.collapse();
    },
  },
};
