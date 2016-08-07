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
      block: 'label',
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
  },

  computed: {
    isValid() {
      return !!this.hasSlot('default') || this.content;
    },
  },

  ready() {
    if (!this.isValid) {
      DebugUtil.warningMessage('No content!', this.$el);
    }
  },
};
