import BlockMixin from './../../mixins/block';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'nav',
    };
  },
};
