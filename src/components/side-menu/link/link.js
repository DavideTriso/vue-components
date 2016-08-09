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
      element: 'link',
    };
  },

  props: {
    /**
     * Link content
     */
    content: {
      type: String,
      required: false,
    },

    routeName: {
      type: String,
      required: false,
    },
  },

  computed: {
    activeClass() {
      let classNames = 'side-menu__link--active';

      if (this.contextualStyle) {
        classNames = classNames.concat(` side-menu__link--active--${this.contextualStyle}`);
      }

      return classNames;
    },
  },
};
