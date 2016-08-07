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
      element: 'close-button',
    };
  },

  props: {
    /**
     * Function to close the alert
     */
    closeFunction: {
      type: Function,
      required: true,
    },
  },
};
