import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';
import DebugUtil from './../../utils/debug';
import * as AlertCloseButton from './close-button/close-button.vue';
import * as AlertMessage from './message/message.vue';
import * as AlertTimer from './timer/timer.vue';
import * as AlertTitle from './title/title.vue';

export default {
  mixins: [
    BlockMixin,
    SlotMixin,
  ],

  data() {
    return {
      block: 'alert',
    };
  },

  props: {
    /**
     * The close button of the alert
     */
    closeButton: {
      required: false,
    },

    /**
     * The timer of the alert
     */
    timer: {
      required: false,
    },

    /**
     * The title of the alert
     */
    title: {
      required: false,
    },

    /**
     * The message of the alert
     */
    message: {
      required: false,
    },
  },

  components: {
    /**
     * The alert close button
     */
    AlertCloseButton,

    /**
     * The alert timer
     */
    AlertTimer,

    /**
     * The alert message
     */
    AlertMessage,

    /**
     * The alert title
     */
    AlertTitle,
  },

  computed: {
    /**
     * Computed property which will output
     * whether there is a title or not
     *
     * @returns {boolean} If there is a title
     */
    hasTitle() {
      return !!(this.title || this.hasSlot('title'));
    },

    /**
     * Computed property which will output
     * whether there is a message or not
     *
     * @returns {boolean} If there is a message
     */
    hasMessage() {
      return !!(this.message || this.hasSlot('message'));
    },

    /**
     * Computed property which will output
     * whether there is a close button or not
     *
     * @returns {boolean} If there is a close button
     */
    hasCloseButton() {
      if (!this.closeButton) {
        return false;
      }

      if (typeof this.closeButton === 'boolean') {
        return true;
      }

      return !!this.closeButton.enabled;
    },

    /**
     * Computed property which will output
     * whether there is a timer or not
     *
     * @returns {boolean} If there is a timer
     */
    hasTimer() {
      if (!this.timer) {
        return false;
      }

      if (typeof this.timer === 'boolean') {
        return true;
      }

      return this.timer.enabled;
    },

    /**
     * Computed property which will output
     * whether the alert can be closed
     *
     * @returns {boolean} If the alert can be closed
     */
    isClosable() {
      return !!(this.hasTimer || this.hasCloseButton);
    },

    /**
     * Computed property which will output
     * whether the alert has content
     *
     * @returns {boolean} If the alert has content
     */
    hasContent() {
      return !!(this.hasTitle || this.hasMessage);
    }
  },

  methods: {
    /**
     * Method used to close the alert.
     * It will destroy the vm and clean it up.
     */
    closeAlert() {
      this.$destroy(true);
    },
  },

  ready() {
    // Check if the alert can be closed
    if (!this.isClosable) {
      DebugUtil.warningMessage('Cannot close the alert!', this.$el);
    }

    // Check if the alert has content
    if(!this.hasContent) {
      DebugUtil.warningMessage('The alert has no content', this.$el);
    }
  },
};
