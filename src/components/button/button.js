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
      /**
       * Block name used for BEM
       */
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
    /**
     * Computed property which will output
     * whether the button uses a function
     *
     * @returns {boolean} If the button uses a function
     */
    isFunction() {
      return typeof this.action === 'function';
    },

    /**
     * Computed property which will output
     * whether the button is a link
     *
     * @returns {boolean} If the button is a link
     */
    isLink() {
      return typeof this.action === 'string';
    },

    /**
     * Computed property which will output
     * whether the button uses VueRouter
     *
     * @returns {boolean} If the button uses VueRouter
     */
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
     * the button is the default DOM button
     *
     * @returns {boolean} If the button is the default
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

    /**
     * Computed property which will output
     * whether the button is valid
     *
     * @returns {boolean} If the button is valid
     */
    isValid() {
      return this.hasSlot('default') || this.content;
    },

    /**
     * Computed property which will output
     * whether the button has an icon or not
     *
     * @returns {boolean} If the button has an icon
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
