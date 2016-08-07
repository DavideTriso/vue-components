import ElementMixin from '../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      element: 'close-button',
    };
  },

  props: {
    /**
     * The function to close the notification
     */
    closeFunction: {
      type: Function,
      required: true,
    },
  },
};
