import BlockMixin from './../../mixins/block';
import * as ProgressBar from './bar/bar.vue';

export default {
  data() {
    return {
      block: 'progress',
    };
  },

  props: {
    progress: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },

  components: {
    ProgressBar,
  },

  mixins: [
    BlockMixin,
  ],
};
