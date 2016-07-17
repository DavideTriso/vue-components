import BlockMixin from '../../mixins/block';
import * as Icon from '../icon/icon.vue';

export default {
  data() {
    return {
      block: 'button',
    };
  },

  props: {
    /**
     * The content displayed inside the button
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * The button link
     */
    link: {
      type: Object,
      required: true,
    },

    /**
     * The icon displayed in the button
     */
    icon: {
      type: Object,
      required: false,
    },
  },

  mixins: [
    BlockMixin,
  ],

  computed: {
    /**
     * Computed property which will output if
     * the button has a link
     *
     * @returns {boolean}
     */
    hasLink() {
      // Check when the property link isn't set
      if (!this.link) {
        return false;
      }

      return !!this.link.to && !this.link.action;
    },

    /**
     * Computed property which will output if
     * the button has an action
     *
     * @returns {boolean}
     */
    hasAction() {
      // Check when the property link isn't set
      if (!this.link) {
        return false;
      }

      return !!this.link.action && !this.link.to;
    },

    /**
     * Computed property which will check if
     * the button is valid
     *
     * @returns {boolean}
     */
    isValid() {
      return !(!this.hasAction && !this.hasLink);
    },

    /**
     * Computer property which will check if
     * the button has an icon
     *
     * @returns {boolean}
     */
    hasIcon() {
      return !!this.icon;
    },
  },

  created() {
    // Check if the button is valid
    if (!this.isValid) {
      console.warn('Warning: The button contains an action and a link. It cannot have both!');
    }
  },

  components: {
    Icon,
  },
};
