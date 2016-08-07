// import DebugUtil from './../../utils/debug';
import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';
import * as Icon from './../icon/icon.vue';

export default {
  mixins: [
    BlockMixin,
    SlotMixin,
  ],

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
      required: false,
    },

    /**
     * The button link
     */
    action: {
      required: false,
    },

    /**
     * The icon displayed in the button
     */
    icon: {
      type: Object,
      required: false,
    },
  },

  computed: {
    isFunction() {
      return typeof this.action === 'function';
    },

    isLink() {
      return typeof this.action === 'string';
    },

    isVueRouter() {
      if (typeof this.action === 'object') {
        if (this.action.vueRouter) {
          return true;
        }
      }

      return false;
    },

    /**
     * Computed property which will check if
     * the button is valid
     *
     * @returns {boolean}
     */
    isDefault() {
      let isDefault = true;

      if (this.isLink) {
        isDefault = false;
      }

      if (this.isFunction) {
        isDefault = false;
      }

      if (this.isVueRouter) {
        isDefault = false;
      }

      return isDefault;
    },

    isValid() {
      return !!(this.hasSlot('default') || this.content);
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
      // todo: Find out why this doesn't work on default slot
      // DebugUtil.warningMessage('The button does not contain any content');
    }
  },

  components: {
    Icon,
  },
};
