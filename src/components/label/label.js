import DebugUtil from './../../utils/debug';
import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';

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
      block: 'label',
    };
  },

  props: {
    /**
     * Content displayed inside the button
     */
    content: {
      type: String,
      required: false,
    },
  },

  computed: {
    /**
     * Computed property which will output
     * whether the label is valid
     *
     * @returns {boolean} If the label is valid
     */
    isValid() {
      return !!this.hasSlot('default') || this.content;
    },
  },

  ready() {
    // Check if the label is valid
    if (!this.isValid) {
      DebugUtil.warningMessage('No content!', this.$el);
    }
  },
};
