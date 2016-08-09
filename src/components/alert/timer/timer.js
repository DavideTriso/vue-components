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
      element: 'timer',

      /**
       * Timer holder
       */
      timer: null,
    };
  },

  props: {
    /**
     * Function used to close the alert
     */
    closeFunction: {
      type: Function,
      required: true,
    },
  },

  methods: {
    /**
     * Function to start the timer
     */
    startTimer() {
      this.timer = setTimeout(this.closeFunction, 5000);
    },
  },

  ready() {
    this.startTimer();
  },

  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
