import BlockMixin from './../../mixins/block';
import * as ProgressBar from './Bar/Bar.vue';

export default {
  data() {
    return {
      block: 'Progress',
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
