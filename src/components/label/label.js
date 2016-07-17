import BlockMixin from '../../mixins/block';

export default {
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
      required: true,
    },
  },

  mixins: [
    BlockMixin,
  ],
};
