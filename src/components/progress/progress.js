import BlockMixin from '../../mixins/block';
import SlotMixin from '../../mixins/slot';
import * as ProgressBar from './bar/bar.vue';

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
      block: 'progress',
    };
  },

  props: {
    /**
     * Progress
     */
    progress: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },

  components: {
    ProgressBar,
  },
};
