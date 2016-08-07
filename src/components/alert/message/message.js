import SlotMixin from './../../../mixins/slot';
import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    SlotMixin,
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'message',
    };
  },

  props: {
    /**
     * Message content
     */
    content: {
      type: String,
      required: false,
    },
  },
};
