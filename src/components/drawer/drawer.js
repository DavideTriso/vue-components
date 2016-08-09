import BlockMixin from './../../mixins/block';
import * as DrawerBody from './body/body.vue';
import * as DrawerHeading from './heading/heading.vue';

export default {
  mixins: [
    BlockMixin,
  ],

  data() {
    return {
      /**
       * Block name used for BEM
       */
      block: 'drawer',
    };
  },

  components: {
    DrawerBody,
    DrawerHeading,
  },
};
