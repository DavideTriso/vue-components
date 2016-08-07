import SlotMixin from './../../../mixins/slot';
import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    SlotMixin,
    ElementMixin,
  ],

  data() {
    return {
      element: 'message',
    };
  },

  props: {
    /**
     * The message content
     */
    content: {
      type: String,
      required: false,
    },
  },
};
